import express from 'express';

import cookieParser from 'cookie-parser';
import session from 'express-session';
import redis from 'redis';
import RedisStore from 'connect-redis';

const proxy = require('http-proxy-middleware');

// import proxy from 'http-proxy-middleware';

import cors from 'cors';

import bodyParser from 'body-parser';

import passport from 'passport';

import auth from './passport';

const app = express();

const redisStore = RedisStore(session);
const client = redis.createClient();

const sessionMiddleware = session({
    store: new redisStore({client}),
    secret: 'test',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 1000,
        secure: false,
        httpOnly: false,
    },
})

const proxyOptionsFrontend = {
    target: 'http://localhost:3000', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'http://localhost:3000': 'http://localhost:3001'
    }
}

const filter = function(pathname: any, req: any): any {
    return !pathname.includes('/api') && req.method === 'GET' && pathname;
};

app.use(proxy.createProxyMiddleware(filter, proxyOptionsFrontend));

auth.init(passport);

app.use(cookieParser('test'));
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(cors());

app.get('/api/', (req, res) => {
   res.send('hello');
});

const authenticate = passport.authenticate('local', {session: true});

app.post('/api/login', authenticate, (req, res): void => {
    res.send('you are login');
});

app.all('/*', (req, res, next) => {
    if((req.method === 'POST' && req.path === '/api/login') || req.isAuthenticated()){
        next();
        return;
    }
    res.status(400).send('user is not auth');
})

app.post('/api/logout', auth.authenticationMiddleware(), (req, res) => {
    req.logOut();
    req.session?.destroy((err) => console.log(err));
    res.send({});
});

app.post('/api/test',(req, res) => {
    res.send('user is auth');
});

const server: any = app.listen(3001, () => {
    const port: string = server?.address()?.port;
    console.log(`Server start on port ${port}`);
});

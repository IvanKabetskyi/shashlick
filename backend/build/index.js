"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const redis_1 = __importDefault(require("redis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const proxy = require('http-proxy-middleware');
// import proxy from 'http-proxy-middleware';
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./passport"));
const app = express_1.default();
const redisStore = connect_redis_1.default(express_session_1.default);
const client = redis_1.default.createClient();
console.log(proxy);
const sessionMiddleware = express_session_1.default({
    store: new redisStore({ client }),
    secret: 'test',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 1000,
        secure: false,
        httpOnly: false,
    },
});
const proxyOptionsFrontend = {
    target: 'http://localhost:3000',
    changeOrigin: true,
    ws: true,
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'http://localhost:3000': 'http://localhost:3001'
    }
};
const filter = function (pathname, req) {
    return !pathname.includes('/api') && req.method === 'GET' && pathname;
};
app.use(proxy.createProxyMiddleware(filter, proxyOptionsFrontend));
passport_2.default.init(passport_1.default);
app.use(cookie_parser_1.default('test'));
app.use(sessionMiddleware);
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.get('/api/', (req, res) => {
    res.send('hello');
});
const authenticate = passport_1.default.authenticate('local', { session: true });
app.post('/api/login', authenticate, (req, res) => {
    res.send('you are login');
});
app.all('/*', (req, res, next) => {
    if ((req.method === 'POST' && req.path === '/api/login') || req.isAuthenticated()) {
        next();
        return;
    }
    res.status(400).send('user is not auth');
});
app.post('/api/logout', passport_2.default.authenticationMiddleware(), (req, res) => {
    var _a;
    req.logOut();
    (_a = req.session) === null || _a === void 0 ? void 0 : _a.destroy((err) => console.log(err));
    res.send({});
});
app.post('/api/test', (req, res) => {
    res.send('user is auth');
});
const server = app.listen(3001, () => {
    var _a;
    const port = (_a = server === null || server === void 0 ? void 0 : server.address()) === null || _a === void 0 ? void 0 : _a.port;
    console.log(`Server start on port ${port}`);
});

import {FileInterface, Description, Bid} from '../types';

export const fileList: FileInterface[] = [
    {
        name: 'robots.txt',
        url: 'http://localhost:3001/robots.txt',
    },
];

export const descriptions: Description[] = [
    {
        key: 1,
        date: '04/16/19 09:00:00',
        name: 'Delta Express Services Inc',
        user: '10 / 80',
        note: {
            text:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            file: undefined,
        },
    },
    {
        key: 2,
        date: '04/16/19 09:00:00',
        name: 'Delta Express Services Inc',
        user: '10 / 80',
        note: {
            text:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            file: fileList,
        },
    },

    {
        key: 3,
        date: '04/16/19 09:00:00',
        name: 'Delta Express Services Inc',
        user: '10 / 80',
        note: {
            text: undefined,
            file: fileList,
        },
    },
];

export const dataBids: Bid[] = [
    {
        key: 0,
        from: 'Easton, PA',
        to: 'Bettendorf, IA',
        rate: '15,750',
        date: '04/16/19 07:35:00',
        company: 'Rainier Transportation',
        user: '10 / 45',
        count: 4,
        notes: {
            archived: false,
            count: 5,
        },
        description: descriptions,
    },
    {
        key: 0,
        from: 'Easton, PA',
        to: 'Bettendorf, IA',
        rate: '15,750',
        date: '04/16/19 07:35:00',
        company: 'Rainier Transportation',
        user: '10 / 45',
        count: 4,
        notes: {
            archived: true,
            count: 5,
        },
        description: descriptions,
    },
    {
        key: 0,
        from: 'Easton, PA',
        to: 'Bettendorf, IA',
        rate: '15,750',
        date: '04/16/19 07:35:00',
        company: 'Rainier Transportation',
        user: '10 / 45',
        count: 4,
        notes: {
            archived: false,
            count: 5,
        },
        description: descriptions,
    },
    {
        key: 0,
        from: 'Easton, PA',
        to: 'Bettendorf, IA',
        rate: '15,750',
        date: '04/16/19 07:35:00',
        company: 'Rainier Transportation',
        user: '10 / 45',
        count: 4,
        notes: {
            archived: false,
            count: 5,
        },
        description: descriptions,
    },
];

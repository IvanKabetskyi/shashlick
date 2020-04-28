export interface ExpandDataInterface {
    key: number;
    date: JSX.Element;
    name: JSX.Element;
    user: JSX.Element;
    note: JSX.Element;
}

export interface FileExpand extends FileInterface {
    uid: string;
    status: string;
}

export interface FileInterface {
    url: string;
    name: string;
}

export interface Description {
    key: number;
    date: string;
    name: string;
    user: string;
    note: {
        text: string | undefined;
        file: FileInterface[] | undefined;
    };
}

export interface Bid {
    key: number;
    from: string;
    to: string;
    rate: string;
    date: string;
    company: string;
    user: string;
    count: number;
    notes: {
        archived: boolean;
        count: number;
    };
    description: Description[];
}

export interface BidRow {
    key: number;
    from: JSX.Element;
    to: JSX.Element;
    rate: JSX.Element;
    date: JSX.Element;
    company: JSX.Element;
    user: JSX.Element;
    count: JSX.Element;
    notes: JSX.Element;
    description: ExpandDataInterface[];
    archived: boolean;
}

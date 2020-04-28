export interface ConfirmLinesInterface {
    from: string;
    to: string;
    rate: string;
    company: string;
    details: string;
}

export interface ConfirmLinesRow {
    from: JSX.Element;
    to: JSX.Element;
    rate: JSX.Element;
    company: JSX.Element;
    details: JSX.Element;
}
import React from 'react';
import Text from 'antd/es/typography/Text';
import {ConfirmLinesInterface, ConfirmLinesRow} from '../types';

export const createRowFromData = (data: any): ConfirmLinesRow[] => {
    const rowArray: ConfirmLinesRow[] = data.map(
        (row: ConfirmLinesInterface, index: number): ConfirmLinesRow => ({
            from: <Text>{row.from}</Text>,
            to: <Text>{row.to}</Text>,
            rate: <Text strong>$ {row.rate}</Text>,
            company: <Text>{row.company}</Text>,
            details: <Text>{row.details}</Text>,
        }),
    );
    return rowArray;
};

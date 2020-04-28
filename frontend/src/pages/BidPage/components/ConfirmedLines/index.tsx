import React from 'react';
import {Table} from 'antd';
import Text from 'antd/es/typography/Text';
import {createRowFromData} from './utils';
import {confirmedLines} from './data';
import {ConfirmLinesRow} from './types';

const ConfirmedLines = (): JSX.Element => {
    const columns = [
        {title: 'FROM', dataIndex: 'from', key: 'from', width: '17.75%'},
        {title: 'TO', dataIndex: 'to', key: 'to', width: '15%'},
        {title: 'RATE', dataIndex: 'rate', key: 'rate', width: '5%'},
        {title: 'COMPANY', dataIndex: 'company', key: 'company', width: '31.125%'},
        {title: 'DETAILS', dataIndex: 'details', key: 'details', width: '31.125%'},
    ];

    const data: ConfirmLinesRow[] = createRowFromData(confirmedLines);

    return (
        <div>
            <Text strong>15 сonfirmed lines</Text>
            <Table
                className="components-table-demo-nested"
                columns={columns}
                bordered
                dataSource={data}
                pagination={{
                    pageSize: 3,
                    onChange: (page, pageSize) => console.log(page, pageSize),
                    total: 15,
                    showSizeChanger: false,
                }}
            />
        </div>
    );
};

export default ConfirmedLines;

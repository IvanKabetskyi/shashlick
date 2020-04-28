import React from 'react';
import {Table} from 'antd';
import {ColumnsType} from 'antd/lib/table/interface';
import {BidRow} from '../../types';

const ExpandedRow = (props: BidRow): JSX.Element => {
    const column: ColumnsType<object> = [
        {key: 'date', dataIndex: 'date', width: '15.55%'},
        {key: 'name', dataIndex: 'name', width: '15.55%'},
        {key: 'user', dataIndex: 'user', width: '5.18%'},
        {key: 'note', dataIndex: 'note'},
    ];

    return (
        <Table
            bordered
            dataSource={props.description}
            columns={column}
            pagination={false}
            showHeader={false}
            scroll={{
                y: 250,
            }}
            rowClassName={props.archived ? 'disables-column' : ''}
        />
    );
};

export default ExpandedRow;

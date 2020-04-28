import React, {useState} from 'react';

import {Table} from 'antd';
import ExpandedRow from './components/ExpandedRow';
import AddNoteModal from './components/modals/AddNoteModal';

import {dataBids} from './data';
import {createRowFromData} from './utils';
import {BidRow} from './types';
import Text from "antd/es/typography/Text";

const BidList = (): JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false);
    const columns = [
        {title: 'FROM', dataIndex: 'from', key: 'from', width: '15%'},
        {title: 'TO', dataIndex: 'to', key: 'to', width: '15%'},
        {title: 'RATE', dataIndex: 'rate', key: 'rate', width: '5%'},
        {title: 'TIME', dataIndex: 'date', key: 'date', width: '10%'},
        {title: 'COMPANY', dataIndex: 'company', key: 'company', width: '18%'},
        {title: 'COMMAND / USER', dataIndex: 'user', key: 'user', width: '10%'},
        {title: 'BIDS COUNT', dataIndex: 'count', key: 'count', width: '7%'},
        {title: 'NOTES / FILES', dataIndex: 'notes', key: 'notes'},
    ];

    const data: BidRow[] = createRowFromData(dataBids, setVisible);

    const expandedRowRender = (record: BidRow): JSX.Element => <ExpandedRow {...record} />;
    return (
        <div>
            <Text strong>257 added bid</Text>
            <Table
                className="components-table-demo-nested"
                columns={columns}
                bordered
                dataSource={data}
                expandable={{expandedRowRender}}
                pagination={{
                    pageSize: 50,
                    onChange: (page, pageSize) => console.log(page, pageSize),
                    total: 257,
                    showSizeChanger: false,
                }}
                rowClassName={(record: BidRow): string => (record.archived ? 'disables-column' : '')}
            />

            <AddNoteModal visible={visible} close={() => setVisible(false)} />
        </div>
    );
};

export default BidList;

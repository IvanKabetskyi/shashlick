import React from 'react';
import {Button, Typography, Space} from 'antd';

import './styles.css';

interface NotesProps {
    count: number;
    archived: boolean;
    openModal: () => void;
    copy: () => void;
}

const {Text} = Typography;

const NotesField = ({count, archived, copy, openModal}: NotesProps): JSX.Element => (
    <div className="notes-container">
        <Text>{`${count} note(s)`}</Text>
        <Space>
            <Button onClick={openModal} type="primary" disabled={archived}>
                add
            </Button>
            {archived && (
                <Button onClick={copy} type="primary">
                    copy
                </Button>
            )}
        </Space>
    </div>
);

export default NotesField;

import React from 'react';
import {Typography, Upload} from 'antd';
import {UploadFile} from 'antd/lib/upload/interface';
import NotesField from '../components/NotesField';
import {Bid, BidRow, Description, ExpandDataInterface, FileInterface} from '../types';

const {Text} = Typography;

const createFileExpandData = (files: FileInterface[]): UploadFile<any>[] => {
    return files.map((file: FileInterface, index: number): any => {
        return {
            ...file,
            uid: `-${index}`,
            status: 'done',
        };
    });
};

const createExpandData = (descriptions: Description[]): ExpandDataInterface[] => {
    const expandArray: ExpandDataInterface[] = descriptions?.map(
        (description: Description, index: number): ExpandDataInterface => {
            return {
                key: index,
                date: <Text>{description.date}</Text>,
                name: <Text>{description.name}</Text>,
                user: <Text>{description.user}</Text>,
                note: (
                    <div>
                        {description.note.text && <Text>{description.note.text}</Text>}
                        {description.note.file && (
                            <Upload
                                listType="picture-card"
                                showUploadList={{showRemoveIcon: false}}
                                fileList={createFileExpandData(description.note.file)}
                            />
                        )}
                    </div>
                ),
            };
        },
    );
    return expandArray;
};

export const createRowFromData = (data: Bid[], setVisible: (value: boolean) => void): BidRow[] => {
    const rowArray: BidRow[] = data.map(
        (row: Bid, index: number): BidRow => ({
            key: index,
            from: <Text>{row.from}</Text>,
            to: <Text>{row.to}</Text>,
            rate: <Text strong>$ {row.rate}</Text>,
            date: <Text>{row.date}</Text>,
            company: <Text>{row.company}</Text>,
            user: <Text>{row.user}</Text>,
            count: <Text>{row.count} Bid(s)</Text>,
            notes: (
                <NotesField
                    archived={row.notes.archived}
                    count={row.notes.count}
                    copy={(): void => console.log(row.notes.archived && row)}
                    openModal={() => setVisible(true)}
                />
            ),
            description: createExpandData(row.description),
            archived: row.notes.archived,
        }),
    );
    return rowArray;
};

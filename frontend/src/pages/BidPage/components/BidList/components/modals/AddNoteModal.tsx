import React, {useState} from 'react';

import {Modal, Button, Form, Typography} from 'antd';
import {Field, Formik} from 'formik';
import {FormikHelpers} from 'formik/dist/types';
import NoteFormTextArea from './components/NoteFormTextArea';
import NoteFileUploader from './components/NoteFileUploader';

const {Text} = Typography;

const {Item} = Form;

interface NoteInterface {
    note: string;
    file: File[];
}

const AddNoteModal = (props: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const initialValues: NoteInterface = {
        note: '',
        file: [],
    };

    const handleCancel = (resetForm: any) => {
        setLoading(false);
        props.close();
        resetForm();
    };

    const handleOk = (value: NoteInterface, {resetForm}: FormikHelpers<NoteInterface>): void => {
        setLoading(true);
        setTimeout(() => handleCancel(resetForm), 3000);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleOk} validateOnChange={false} validateOnBlur={false}>
            {({handleSubmit, resetForm}) => {
                return (
                    <Modal
                        className="note-modal-body"
                        visible={props.visible}
                        title="New Bid Note"
                        onOk={() => handleSubmit()}
                        onCancel={() => handleCancel(resetForm)}
                        footer={[
                            <Button key="back" onClick={() => handleCancel(resetForm)}>
                                Cancel
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={() => handleSubmit()}>
                                Add Note
                            </Button>,
                        ]}
                    >
                        <Form>
                            <Item label="Bid">
                                <Text>Easton, PA - Bettendorf, IA, $1,050</Text>
                            </Item>
                            <Field
                                name="note"
                                type="text"
                                label="Note"
                                placeholder="Enter note"
                                maxLength={36}
                                as={NoteFormTextArea}
                            />
                            <Field name="file" type="file" label="File" as={NoteFileUploader} />
                        </Form>
                    </Modal>
                );
            }}
        </Formik>
    );
};

export default AddNoteModal;

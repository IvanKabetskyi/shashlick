import React from 'react';
import {Form, Upload} from 'antd';
import {FieldInputProps, useField} from 'formik';

import {PlusOutlined} from '@ant-design/icons';
import {UploadChangeParam, UploadFile} from 'antd/lib/upload/interface';

const {Item} = Form;

function getBase64(file: any) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

const NoteFileUploader: React.FC<FieldInputProps<File>> = (props: any): JSX.Element => {
    const [field, meta, helpers] = useField(props);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    const handleChange = (fileUpload: UploadChangeParam): void => {
        helpers.setValue(fileUpload.fileList);
    };

    const handlePreview = async (file: UploadFile<any>): Promise<void> => {
        if (file && !file.url && !file.preview) {
            (file as any).preview = await getBase64(file.originFileObj);
        }
        const filePreviewTab = window.open('', '_blank');
        (filePreviewTab as any).document.write(`<img src='${file.url || file.preview}' />`);
    };

    return (
        <Item label={props.label}>
            <Upload listType="picture-card" fileList={field.value} onChange={handleChange} onPreview={handlePreview}>
                {field.value.length < 1 && uploadButton}
            </Upload>
        </Item>
    );
};

export default NoteFileUploader;

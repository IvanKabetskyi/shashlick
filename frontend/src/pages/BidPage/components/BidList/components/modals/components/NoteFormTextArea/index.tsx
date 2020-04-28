import React from 'react';
import {FieldInputProps, useField} from 'formik';
import {Form, Input, Typography} from 'antd';

import './style.css';

const {Item} = Form;

const {Text} = Typography;

interface FormInputProps extends FieldInputProps<string> {
    placeholder: string;
    label: string | undefined;
    maxLength: number | undefined;
}

const NoteFormTextArea: React.FC<FormInputProps> = ({maxLength, placeholder, label, ...props}): JSX.Element => {
    const [field] = useField(props);

    return (
        <Item label={label}>
            <Input.TextArea
                maxLength={maxLength}
                autoSize={{
                    maxRows: 4,
                    minRows: 4,
                }}
                {...field}
                placeholder={placeholder}
            />
            <div className="text-area-length-container">
                <Text type="secondary">{`${field.value.length}/${maxLength} symbols`}</Text>
            </div>
        </Item>
    );
};

export default NoteFormTextArea;

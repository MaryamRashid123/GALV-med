/*
  Input Text
*/

import React from 'react';

// Antd
import { Input, Form } from 'antd';

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

function InputEmail({ 
  name, label, 
  placeholder, defaultValue, 
  onChange, disabled, required,
  onBlur, validateTrigger,
  validator
}) {

  return(
    <Form.Item
      name={ name }
      label={ label }
      validateTrigger={ validateTrigger || 'onBlur' }
      rules={
        [
          { required: required, message: LOCALIZATION.REQUIRED },
          { type: 'email', message: LOCALIZATION.INVALID_EMAIL },
          { validator: validator },
        ]
      }
    >
      <Input 
        placeholder={ placeholder || label } 
        onChange={ onChange || null } 
        defaultValue={ defaultValue }
        disabled={ disabled }
        onBlur={ onBlur }
      />
    </Form.Item>
  );
}

export default InputEmail;
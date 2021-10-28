/*
  Input Text
*/

import React from 'react';

// Antd
import { Input, Form } from 'antd';

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

function InputText({ 
  name, label, placeholder, 
  readOnly, defaultValue, 
  onChange, disabled, required,
  onBlur, validator, validateTrigger,
  maxLength
}) {

  // Validations rules
  let  rules = [{ required: required, message: LOCALIZATION.REQUIRED }];
  if(!!validator){
    rules.push({ validator: validator });
  }

  return(
    <Form.Item
      name={ name }
      label={ label }
      validateTrigger={ validateTrigger || 'onBlur' }
      rules={ rules }
    >
      <Input 
        placeholder={ placeholder || label } 
        onChange={ onChange || null } 
        defaultValue={ defaultValue }
        disabled={ disabled }
        onBlur={ onBlur }
        maxLength={ maxLength }
        readOnly={ readOnly }
        //allowClear={ allowClear }
      />
    </Form.Item>
  );
}

export default InputText;
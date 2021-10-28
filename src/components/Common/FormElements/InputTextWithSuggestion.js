/*
  Input Text
*/

import React, { useState } from 'react';

// Antd
import { Input, Form, AutoComplete } from 'antd';

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

function InputTextWithSuggestion({ 
  name, label, placeholder, 
  options, defaultValue, 
  onChange, disabled, required,
  onBlur, validator, validateTrigger,
  maxLength, onSelect, allowClear
}) {

  const [filterOptions, setFilterOptions] = useState(options || []);

  const onChangeOption = (e) => {
    setFilterOptions(
      options.filter(el => el.value.toLowerCase().indexOf(e.toLowerCase()) !== -1)
    );
  }

  return(
    <Form.Item
      name={ name }
      label={ label }
      validateTrigger={ validateTrigger || 'onBlur' }
      rules={
        [
          { required: required, message: LOCALIZATION.REQUIRED },
          { validator: validator },
        ]
      }
    >
      <AutoComplete
        options={ filterOptions }
        onSelect={ onSelect }
        onChange={ onChangeOption }
      >
        <Input 
          placeholder={ placeholder || label } 
          onChange={ onChange || null } 
          defaultValue={ defaultValue }
          disabled={ disabled }
          onBlur={ onBlur }
          maxLength={ maxLength }
          allowClear={ allowClear }
        />
      </AutoComplete>
    </Form.Item>
  );
}

export default InputTextWithSuggestion;
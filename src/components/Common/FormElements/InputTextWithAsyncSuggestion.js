/*
  Input Text
*/

import React from 'react';

// Antd
import { Input, Form, AutoComplete } from 'antd';

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

const searchTypingInterval = 700;

function InputTextWithAsyncSuggestion({ 
  name, label, placeholder, 
  allowClear, defaultValue, 
  onChange, disabled, required,
  onBlur, validator, validateTrigger,
  maxLength, fetchSuggestions, options
}) {

  let typingTimer;

  const onSelect = (e) => {
    !!onChange && onChange(e)
  }

  const onKeyUp = (e) => {
    let value = e?.target?.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => 
      fetchSearchSuggestions(value), 
    searchTypingInterval
    );
  }

  const fetchSearchSuggestions = (value) => {
    !!fetchSuggestions && fetchSuggestions(value)
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
        dropdownMatchSelectWidth={252}
        options={ options }
        onSelect={ onSelect }
        maxLength={ maxLength }
        disabled={ disabled }
      >
        <Input 
          placeholder={ placeholder || label } 
          onChange={ e => !!onChange && onChange(e?.target?.value) } 
          defaultValue={ defaultValue }
          onBlur={ e => !!onBlur && onBlur(e?.target?.value) }
          onKeyUp={ onKeyUp }
          onKeyDown={ e => clearTimeout(typingTimer) }
          allowClear={ allowClear }
        />
      </AutoComplete>
    </Form.Item>
  );
}

export default InputTextWithAsyncSuggestion;
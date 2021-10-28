/*
  Input Text
*/

import React from 'react';

// Antd
import { Form } from 'antd';
import DatePicker from './DatePickerComponent';

// Constant
import { DATE_FORMAT } from '@cattleview/common/src/constants/DateFormatConstants';

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

function Picker({ 
  name, 
  label, 
  placeholer, 
  onChange, 
  disabled, 
  allowClear, 
  format,
  disabledDate,
  defaultValue,
  required,
  type
}) {
  return(
    <Form.Item
      name={ name }
      label={ label }
      rules={[{ required: required, message: LOCALIZATION.REQUIRED }]}
    >
      <DatePicker 
        format={ format || (type === 'time'? DATE_FORMAT.HOUR_MINUTE_12F: DATE_FORMAT.MONTH_SLASH_DAY_SLASH_YEAR) }
        allowClear={ allowClear }
        defaultValue={ defaultValue }
        placeholer={ placeholer || label } 
        onChange={ onChange }
        disabled={ disabled }
        disabledDate={ disabledDate }
        inputReadOnly={ true }
        picker={ type || 'date' }
      />
    </Form.Item>
  );
}

export default Picker;
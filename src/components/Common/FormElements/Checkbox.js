/*
  Checkbox
*/

import React from 'react';

// Antd
import { Checkbox, Form } from 'antd';

function CheckBox({
  name,
  label,
  onChange,
  verticalLabel,
  labelOnTop,
  disabled
}) {
  return (
    <Form.Item
      name={name}
      valuePropName="checked"
      className={`${!!verticalLabel ? '' : 'checkboxWrapper'} ${ !!labelOnTop? 'checkbox-v-layout': '' }`}
    >
      <Checkbox
        onChange={onChange}
        disabled = {disabled}
      >
        {label}
      </Checkbox>
    </Form.Item>
  );
}

export default CheckBox;
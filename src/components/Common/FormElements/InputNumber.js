/*
  Input Text
*/

import React from 'react';

// Antd
import { Form, InputNumber } from 'antd';

// Helpers
import { getRules, ruleRequired } from '@cattleview/web/src/common/AntdRulesHelper';

function Number({
  name, label, placeholder,
  defaultValue, precision,
  onChange, disabled, required,
  min, max, step, validateTrigger, validator,
  onblur, readOnly
}) {

  let rules = getRules([
    ruleRequired(required)
  ]);

  if (!!validator) {
    rules.push({ validator: validator })
  }

  return (
    <Form.Item
      name={name}
      label={label}
      validateTrigger={validateTrigger || 'onBlur'}
      rules={rules}
    >
      <InputNumber
        placeholder={placeholder || label}
        onChange={onChange || null}
        defaultValue={defaultValue}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        precision={precision}
        onBlur = {onblur}
        readOnly={ readOnly }
      />
    </Form.Item>
  );
}

export default Number;
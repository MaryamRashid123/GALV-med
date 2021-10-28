/*
  Input Text
*/

import React from 'react';

// Antd
import { Radio, Form } from 'antd';

function RadioButton({ name, label, value, options, onChange }) {
  return(
    <Form.Item
      name={ name }
      label={ label }
    >

      <Radio.Group onChange={ onChange } value={ value } >
        {
          options && options.map((opt, index) => {
            return(
              <Radio 
                key={index} 
                value={ opt.value }>
                { opt.text }
              </Radio>
            )
          })
        }
      </Radio.Group>

    </Form.Item>
  );
}

export default RadioButton;
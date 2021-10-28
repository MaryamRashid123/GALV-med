/*
  Dropdown
*/

import React from 'react';

// Antd
import { Select, Form } from 'antd';

// Component
import NoContent from '../NoCotentDropdown';

// Helpers
import { sortArray } from '@cattleview/common/src/helpers/GeneralHelper'

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

const { Option } = Select;

function Dropdown({ 
  name, label, showSearch, placeholder, 
  options, onChange, defaultValue, 
  allowClear, disabled, required,
  loading, onKeyUp, onKeyDown, validator
}) {

  const sortBy = [{ prop:'text', direction: 1 }];
  const sortedOption = sortArray(options, sortBy);

  // Validations rules
  let  rules = [{ required: required, message: LOCALIZATION.REQUIRED }];
  if(!!validator){
    rules.push({ validator: validator });
  }

  return(
    <Form.Item
      name={ name }
      label={ label }
      rules={ rules }
    >
      <Select 
        showSearch={ showSearch }
        allowClear={ allowClear }
        defaultValue={ defaultValue }
        placeholder={ placeholder || LOCALIZATION.PLEASE_SELECT } 
        onChange={ onChange }
        onKeyUp={ onKeyUp }
        onKeyDown={ onKeyDown }
        disabled={ disabled }
        loading={ loading }
        optionFilterProp="title"
        notFoundContent={< NoContent loading={ loading } />}
      >
        {
          sortedOption && sortedOption.map((data, index) => {
            return(
              <Option 
                key={ index } 
                title={ data.text }
                value={ data.value }>
                { data.text }
              </Option>
            )
          })
        }
      </Select>
    </Form.Item>
  );
}

export default Dropdown;
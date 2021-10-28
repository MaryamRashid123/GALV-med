/*
  Async Dropdown
*/

import React, { useState, useEffect } from 'react';

// Antd
import { Select, Form, Checkbox} from 'antd';

// Component
import NoContent from '../NoCotentDropdown';

// Helpers
import { sortArray } from '@cattleview/common/src/helpers/GeneralHelper'

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

const { Option } = Select;
const SORT_BY = [{ prop: 'text', direction: 1 }];

const searchTypingInterval = 700;

function AsyncDropdown({
  name, label, showSearch, placeholer,
  options, onChange, defaultValue,
  allowClear, disabled, required,
  getData, loading, notWrapInForm,
  hideOnLoadOption, checkboxEnabler,
  onUncheck, validator
}) {

  let typingTimer;

  // Local States
  const [search, setSearch] = useState(false);
  const [list, setList] = useState(null);
  const [check, setCheck] = useState(!!checkboxEnabler);

  // onLoad
  useEffect(() => {
    // Dropdown Data
    // (!options || !options.length) && !hideOnLoadOption && getOptions("", true);  // Getting Options
    !hideOnLoadOption && getOptions('', true);  // Getting Options
    return () => {
      clearTimeout(typingTimer);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Save Options
  useEffect(() => {
    if (!!options.length && !list) {
      setList(options);
    }
  }, [options]);

  const getOptions = (keyword = '', init = false) => {
    setSearch(keyword);
    //if(!!init || (!!keyword && keyword !== search)){
    if (!!init || (keyword !== search)) {
      getData(keyword);
    }
  }

  const onKeyUp = (e) => {
    let value = e?.target?.value;
    clearTimeout(typingTimer);

    typingTimer = setTimeout(() =>
      getOptions(value),
    searchTypingInterval
    );
  }

  // Sorted Options
  const sortedOption = sortArray(
    !!options && !!options.length ? options : list,
    SORT_BY
  );

  const onCheckbox = () => {
    const val = !check;
    setCheck(val);
    if(onUncheck && !val){
      onUncheck();
    }
  }

  const SelectDropdown = (
    <Select
      showSearch={showSearch}
      allowClear={allowClear}
      defaultValue={defaultValue}
      placeholder={placeholer || LOCALIZATION.PLEASE_SELECT}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={() => clearTimeout(typingTimer)}
      disabled={!!checkboxEnabler ? !check : disabled}
      loading={loading}
      notFoundContent={< NoContent loading={loading} />}
      optionFilterProp="title"
    >
      {
        sortedOption && sortedOption.map((data, index) => {
          return (
            <Option
              key={index}
              title={data.text}
              value={data.value}>
              {data.text}
            </Option>
          )
        })
      }
    </Select>
  )

  const requiredField = required || !!check;

  // Validations rules
  let  rules = [{ required: required, message: LOCALIZATION.REQUIRED }];
  if(!!validator){
    rules.push({ validator: validator });
  }
  return (
    <>
      {
        !!notWrapInForm ?
          <>
            <label>
              { label }
              { requiredField && <em>*</em> }
            </label>
            {SelectDropdown}
          </> :
          <div className="checkbox-in-field">

            <label>
              { label }
              { requiredField && <em>*</em> }
            </label>
            <div className="align-check-field">
              {
                checkboxEnabler &&

                <Checkbox
                  checked={!!check}
                  onChange={onCheckbox}
                />

              }
              <Form.Item
                name={name}
                // rules={[{ required: requiredField, message: LOCALIZATION.REQUIRED }]}
                rules={ rules }
              >
                {SelectDropdown}
              </Form.Item>
            </div>
          </div>
      }
    </>
  );
}

export default AsyncDropdown;
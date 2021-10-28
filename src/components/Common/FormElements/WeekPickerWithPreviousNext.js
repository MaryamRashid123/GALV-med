/*
  Input Text
*/

import React from 'react';

// Antd
import { Form, Input } from 'antd';
import DatePicker from './DatePickerComponent';

// Helpers
import { getWeekDates, getNextWeekDates, getPreviousWeekDates } from '@cattleview/common/src/helpers/DateHelper';

function Picker({
  name,
  label,
  startDate,
  onEndDate,
  onStartDate
}) {

  const previousWeek = () => {
    const dates = getPreviousWeekDates(startDate);
    onEndDate(dates?.endDate);
    onStartDate(dates?.startDate);
  }

  const nextWeek = () => {
    const dates = getNextWeekDates(startDate);
    onEndDate(dates?.endDate);
    onStartDate(dates?.startDate);
  }

  const onDateChange = (date) => {
    const dates = getWeekDates(date);
    onEndDate(dates?.endDate);
    onStartDate(dates?.startDate);
  }

  const arrowLeft = (
    <i className="fa fa-caret-left" onClick={previousWeek}></i>
  );

  const arrowRight = (
    <i className="fa fa-caret-right" onClick={nextWeek}></i>
  );

  const calenderIcon = (
    <i className="cicon-calendar"></i>
  );

  return (
    <div className="arrow-week-picker">
      <Form.Item
        name={name}
        label={label}
      >
        <Input
          prefix={arrowLeft}
          suffix={arrowRight}
          readOnly={true}
        />
      </Form.Item>
      <DatePicker
        onChange={onDateChange}
        inputReadOnly={true}
        allowClear={false}
        suffixIcon={calenderIcon}
      />
    </div>
  );
}

export default Picker;
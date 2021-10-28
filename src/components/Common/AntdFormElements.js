/* eslint-disable default-case */
/*
  Show Label and Value up and down shape
*/

import React from 'react';

// Form Elements
import { InputText } from './FormElements';

function AntdFormElements({ type, field }) {

  switch(type){

  // Text Input
  case 1: 
    return(
      <InputText
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
      />
    )
  }
}

export default AntdFormElements;
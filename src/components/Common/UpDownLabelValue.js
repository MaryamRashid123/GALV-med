/*
  Show Label and Value up and down shape
*/

import React from 'react';

// Antd
import { Col } from "antd";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

function UpDownLabelValue({ 
  label, 
  value, 
  span,
  xs,
  sm,
  md,
  lg,
  xl
}) {
  const val = value || (typeof value === "number" ? 0 : LOCALIZATION.NA);
  return (
    <Col span={span || ""} xs={ xs || "" } sm={ sm || "" } md={ md || "" } lg={ lg || "" } xl={ xl || "" }>
      <label>{label || LOCALIZATION.NA}</label>
      <span title={ val }>{ val }</span>
    </Col>
  );
}

export default UpDownLabelValue;
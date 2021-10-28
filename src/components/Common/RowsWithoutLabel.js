/*
  Show Label  down shape
*/

import React from 'react';

// Antd
import { Col } from 'antd';

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

function RowsWithoutLabel({ 
  label, 
  value, 
  span,
  xs,
  sm,
  md,
  lg,
  xl
}) {

  const val = value || (typeof value === 'number' ? 0 : LOCALIZATION.NA);
  return (
    <Col span={span || ''} xs={ xs || '' } sm={ sm || '' } md={ md || '' } lg={ lg || '' } xl={ xl || '' }>
      <span title={ val }>{ val }</span>
    </Col>
  );
}

export default RowsWithoutLabel;
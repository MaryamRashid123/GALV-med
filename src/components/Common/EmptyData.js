/*
  Empty Data Page
*/

import React from 'react';

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';

function EmptyData({ message }) {
  return (
    <div className="generic-empty-msg">
      <p>
        <i className="cicon-exclamation-circle1"></i>
        { !!message? message: LOCALIZATION.FILTER_NO_DATA }
      </p>
    </div>
  );
}

export default EmptyData;
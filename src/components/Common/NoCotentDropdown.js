/*
  No Content Dropdown
*/

import React from 'react';

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

function NoContent({ loading, message }) {
  return (
    <>
      {
        !!loading ?
          <div className="loader-center">
            <div className="loader sm"></div>
          </div> :
          <div className="no-data-center">
            <div className="no-data v-direction">
              <i className="cicon-exclamation-circle1"></i>
              <em>{message || LOCALIZATION.NO_DATA_FOUND}</em>
            </div>
          </div>
      }
    </>
  );
}

export default NoContent;
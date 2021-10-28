/*
  Lot List Filters
*/

import React, { useRef, useEffect } from 'react';

// Helpers
import { isNodeFilterOverlay } from '@cattleview/common/src/helpers/GeneralHelper';

function RightArea({ visible, setVisible, children }) {
  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const handleClick = e => {
    if (isNodeFilterOverlay(e?.target)) {
      setVisible(false);
    }
    return;
  };

  return (
    <>
      <div className={`${!!visible ? 'filter-overlay show-filter-overlay' : 'filter-overlay'}`}></div>
      <div ref={node} className={`${!!visible ? 'filter-panel show-filter-panel' : 'filter-panel'}`}>
        { children }
      </div>
    </>
  );
}

export default RightArea;
/*
  Lot List Filters
*/

import React, { useState, useEffect } from 'react';

import { Drawer } from "antd";

function ResizableDrawerHorizontal({ drawerWidth, visible, onClose, children }) {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(drawerWidth || 256);

  const onMouseDown = e => {
    setIsResizing(true);
  };

  const onMouseUp = e => {
    setIsResizing(false);
  };

  const onMouseMove = e => {
    if (isResizing) {
      let offsetRight =
        document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
      const minWidth = 200;
      const maxWidth = 600;
      if (offsetRight > minWidth && offsetRight < maxWidth) {
        setWidth(offsetRight);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <>
      <Drawer
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={width}
      >
        <div
          className="drawer-horizontal-drag"
          onMouseDown={onMouseDown}
        />
        {children}
      </Drawer>
    </>
  );
}

export default ResizableDrawerHorizontal;
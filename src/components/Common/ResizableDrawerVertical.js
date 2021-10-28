/*
  Resizeable Vertical Drawer
*/

import React, { useState, useEffect } from 'react';

import { Drawer } from "antd";

function ResizableDrawerVertical({
  title,
  drawerHeight,
  setDrawerHeight,
  visible,
  onClose,
  children
}) {

  const [isResizing, setIsResizing] = useState(false);
  const [height, setHeight] = useState(drawerHeight || 300);

  const onMouseDown = e => {
    setIsResizing(true);
  };

  const onMouseUp = e => {
    setIsResizing(false);
  };

  const onMouseMove = e => {
    if (isResizing) {
      let offsetTop =
        document.body.offsetHeight - (e.clientY - document.body.offsetTop);
      const minHeight = 300;
      const maxHeight = window.innerHeight - 50;
      if (offsetTop > minHeight && offsetTop < maxHeight) {
        setHeight(offsetTop);
        setDrawerHeight(offsetTop);
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
        title={title}
        placement="bottom"
        closable={true}
        onClose={onClose}
        visible={visible}
        height={height}
      >
        <div
          className="drawer-vertical-drag"
          onMouseDown={onMouseDown}
        />
        {children}
      </Drawer>
    </>
  );
}

export default ResizableDrawerVertical;
/*
  Antd Table with Scroll Thin
*/

import React from 'react';

// Plugin
import { Scrollbars } from 'react-custom-scrollbars';


// Antd
import { Table /*, ConfigProvider*/ } from "antd";

//import EmptyData from "./NoCotentDropdown";

function AntdTable({
  dataSource,
  columns,
  loading,
  height,
  scroll,
  onScrollBottom,
  onclickRecord
}) {

  const addEllipsisInColumns = () => {
    let updatedCol = [];
    for (let i = 0; columns && i < columns.length; i++) {
      let obj = columns[i];
      obj.ellipsis = true;
      updatedCol.push(obj);
    }

    return updatedCol;
  }

  const onScroll = (e) => {

    const target = e.target;
    const height =  target.scrollHeight - target.scrollTop -   target.clientHeight;
    if ( height<=3 && !!onScrollBottom) {
      onScrollBottom();
    }
  }

  return (
    <Scrollbars
      style={{ width: "100%", height: height || 200 }}
      onScroll={onScroll}
    >
      {/* <ConfigProvider renderEmpty={EmptyData}> */}
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              !!onclickRecord && onclickRecord(record, rowIndex);
            }, 
           
          };
        }}
        dataSource={dataSource}
        columns={addEllipsisInColumns(columns)}
        pagination={false}
        className="generic-table"
        loading={loading}
        scroll={scroll}
      />
      {/* </ConfigProvider> */}
    </Scrollbars>
  );
}

export default AntdTable;
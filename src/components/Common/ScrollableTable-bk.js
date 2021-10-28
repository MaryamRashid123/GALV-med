/*
  Antd Table with Scroll Thin
*/

import React from 'react';

// Plugin
import { Scrollbars } from 'react-custom-scrollbars';

// Antd
import { Table } from 'antd';

function AntdTable({
  dataSource, 
  columns, 
  loading, 
  height,
  onScrollBottom
}) {
  
  const component = {
    table (props) {
      const { className } = props;
      return (
        <Scrollbars 
          style={{ width: '100%', height: height || 200 }}
          onScroll={ onScroll }>
          <table className={className}>
            { props.children }
          </table>
        </Scrollbars>
      )
    }
  };

  const onScroll = (e) => {
    const target = e.target;
    if (
      target.scrollHeight - target.scrollTop === target.clientHeight && 
      !!onScrollBottom) {
      onScrollBottom();
    }
  }

  return(
    <Table
      dataSource={ dataSource }
      columns={ columns }
      pagination={false}
      className="generic-table"
      loading={ loading }
      components={ component }
    />
  )
}

export default AntdTable;
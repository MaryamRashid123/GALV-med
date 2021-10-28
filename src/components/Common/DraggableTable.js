/*
  Draggble Table
*/

import React from 'react';

//Drag and Drop
import { Draggable } from 'react-beautiful-dnd';

// Helpers
import { getRecordValue } from '@cattleview/common/src/helpers/GeneralHelper';

//Component
import EmptyData from './EmptyTableData';

// Plugin
import { Scrollbars } from 'react-custom-scrollbars';

function AntdTable({ columns, data, recordKey, dragKey, loading, droppable }) {

  return (
    <div className="table-loader-while-dragging">
      {!!loading && (
        <div className="loader-center table-loader-on-top">
          <div className="loader sm"></div>
        </div>
      )}

      <Scrollbars style={{ width: '100%', height: 200 }}>
        <table
          style={{
            width: '100%',
            backgroundColor: 'white',
            textAlign: 'center',
            padding: '15px',
            fontSize: '12px',
          }}
        >
          <thead>
            <tr>
              {Object.keys(columns).map((keyName, keyIndex) => {
                const { LABEL } = columns[keyName];
                return <th key={keyIndex}>{LABEL}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {data?.length > 0 &&
              data?.map((record, index) => {
                let key = record?.[recordKey];
                return !!droppable ? (
                  <Draggable draggableId={key + dragKey} index={key} key={key}>
                    {(provided, snapshot) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {Object.keys(columns).map((keyName, keyIndex) => {
                          const { PARENT, ID, TYPE } = columns[keyName];
                          return (
                            <td key={keyIndex}>{getRecordValue(record, PARENT, ID, TYPE)}</td>
                          );
                        })}
                      </tr>
                    )}
                  </Draggable>
                ) : (
                  <tr>
                    {Object.keys(columns).map((keyName, keyIndex) => {
                      const { PARENT, ID, TYPE } = columns[keyName];
                      return <td key={keyIndex}>{getRecordValue(record, PARENT, ID, TYPE)}</td>;
                    })}
                  </tr>
                );
              })}
            <tr>
              <td colSpan="9">
                {!data?.length > 0 && !loading && <EmptyData />}
              </td>
            </tr>
          </tbody>
        </table>
      </Scrollbars>
    </div>
  );
}

export default AntdTable;

/*
  Feed Single Record
*/

import React from 'react';

// Antd
import { Modal, message } from 'antd';

//Redux
import {  useDispatch } from 'react-redux';

// Helpers
import { getErrorMessage } from '@cattleview/common/src/helpers/GeneralHelper';

// Localization
import LOCALIZATION from '@cattleview/common/src/services/LocalizationService';


function DeleteButton({ 
  setEdit,
  id, 
  action,
  isDeleteAllowed,
  params,
  setLocalstateRecord
}) {
 
  const dispatch = useDispatch();

  // Delete confirmation popup
  const deleteConfirm = (e) => {
    e.stopPropagation();
    if(setEdit){
      setEdit(id);
    }  

    Modal.confirm({
      title: LOCALIZATION.CONFIRM,
      content: (
        <div>
          <p>{LOCALIZATION.DELETE_CONFIRMATION}</p>
        </div>
      ),
      okText: LOCALIZATION.DELETE,
      cancelText: LOCALIZATION.CANCEL,
      onOk() {
        onDelete();
      },
    });
  };

  // Delete Entry
  const onDelete = () => {
    dispatch(
      action(
        params
      )
    ).then(
      () => {
        message.success(LOCALIZATION.DELETED_SUCCESSFULLY);
        if(setEdit){
          setEdit(id);
        }  
        if(!!setLocalstateRecord){
          setLocalstateRecord(id);
        }
      },
      (e) => {
        message.error(getErrorMessage(e, LOCALIZATION.ERROR_IN_DELTE));
      }
    );
  };

  return (
    <>
      { !!isDeleteAllowed &&   <i className={'cicon-trash'} onClick={ deleteConfirm }></i> }
    </>

  );
}

export default DeleteButton;

/*
  Component for Prompt on leave
*/

import React, { useEffect, useState } from 'react';
import { useHistory, Prompt } from "react-router-dom";

// Antd
import { Modal } from "antd";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

function PromptOnLeave({ 
  show
}) {
  let timer = null;
  const history = useHistory();

  // Local state
  let [isBlocking, setIsBlocking] = useState(true);

  useEffect(() => {
    // on Destroy
    return () => clearTimeout(timer);
  }, []);

  const goTo = (path) => {
    setIsBlocking(false);
    timer = setTimeout(() => {
      history.push(path);
    }, 50);
  }

  return (
    <Prompt
      when={ !!isBlocking && !!show }
      message={(location) => {
        Modal.confirm({
          title: LOCALIZATION.CONFIRM,
          content: (
            <div>
              <p>{ LOCALIZATION.UNSAVED_DATA_CONFIRMATION}</p>
            </div>
          ),
          okText: LOCALIZATION.CONTINUE,
          cancelText: LOCALIZATION.BACK,
          onOk() { goTo(location.pathname) },
        });
        return false;
      } }
    />
  );
}

export default PromptOnLeave;
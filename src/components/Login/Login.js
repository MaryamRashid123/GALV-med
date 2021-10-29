/*
  Application Login
*/

import React, { useState, /*useEffect*/ } from 'react';
import { useHistory } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Components
import Loading from '../Loading/Loading';

// Antd
import {
  Row, Col, Form, Input,
  Button, Checkbox, /*Select*/
} from 'antd';

// Localization
import LOCALIZATION from '../../common/services/LocalizationService';


function Login() {
  
  const onSubmit = (data) => {
    // console.log(data)
  }

  return (
    <Row gutter={[0]}>
      <Col md={7} sm={9} xs={24} className="abstract-bg">
        <div className="login-form-wrapper d-flex flex-column">
          <div className="login-form-container">
            <div className="login-form">
             
              <Form onFinish={onSubmit}>
                <h3>{LOCALIZATION.LOGIN}</h3>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: LOCALIZATION.REQUIRED }]}
                >
                  <Input placeholder={LOCALIZATION.USERNAME} />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: LOCALIZATION.REQUIRED }]}
                >
                  <Input.Password placeholder={LOCALIZATION.PASSWORD} />
                </Form.Item>

                {/* <Form.Item
                  name="location"
                  rules={[{ required: true, message: LOCALIZATION.REQUIRED }]}
                >
                  <Select 
                    showSearch 
                    placeholder={LOCALIZATION.SELECT_FEEDYARD} 
                    optionFilterProp="title"
                  >
                    {
                      feedyardList && feedyardList.map((feedyard, index) => {
                        return (
                          <Option 
                            key={index} 
                            value={feedyard.locationID} 
                            title={feedyard.descr}>
                              {feedyard.descr}
                          </Option>
                        )
                      })
                    }
                  </Select>
                </Form.Item> */}

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>
                    {LOCALIZATION.KEEP_SIGNED_IN}
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {LOCALIZATION.LOGIN}
                  </Button>
                </Form.Item>

                {/* {apiError && <div className="invalid-credentials msg-error">{LOCALIZATION.INVALID_CREDENTIALS}</div>} */}

              </Form>
            </div>
          </div>
          <div className="login-footer">
            {/* <span>&copy; {new Date().getFullYear()} {LOCALIZATION.CACTUS_FEEDERS}</span> */}
          </div>
        </div>
      </Col>
      <Col md={17} sm={15} xs={24}>
        
      </Col>
    </Row>
  );
}

export default Login;
/*
  Application Login
*/

import React from 'react';

// Antd
import {
  Row, Col, Form, Input,
  Button, Checkbox
} from 'antd';

// Redux
import { useDispatch } from 'react-redux';

// Import Actions
import { login } from '../../../store/actions/AuthAction';

// Localization
import LOCALIZATION from '../../../services/LocalizationService';

function Login() {
  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    dispatch(
      login({
        ...data,
        appId: 1
      })
    )
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

              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
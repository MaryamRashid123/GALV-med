/*
  Application Login
*/

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Antd
import {
  Row, Col, Form, Input,
  Button, Checkbox
} from 'antd';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Components
import Loading from '../../Loading';

// Actions
import { login, logout} from '../../../store/actions/AuthAction';

// Constants
import APP_URL from '../../../constants/applicationUrls';

// Localization
import LOCALIZATION from '../../../services/LocalizationService';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Redux States
  const { loading } = useSelector(state => state?.Auth);

  useEffect(() => {
    dispatch(logout())
  }, [dispatch]);
  
  const onSubmit = (data) => {
    dispatch(
      login({
        ...data,
        appId: 1
      })
    ).then(() => {
      history.push(APP_URL.DASHBOARD);
    })
  }

  return (
    <Row gutter={[0]}>
      { loading && <Loading /> }
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
                  <Button type="primary" htmlType="submit" className="test" >
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

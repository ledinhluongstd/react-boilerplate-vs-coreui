import React from 'react';
import { FormattedMessage } from 'react-intl';
// import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';
import messages from './messages';
import { handleRedirectTo } from '../../utils/commonFunction';
import { ROUTER } from '../../utils/constants';

/* eslint-disable react/prefer-stateless-function */
class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      },
    };
  }

  changeElement(event) {
    this.state.user[event.target.id] = event.target.value;
    this.forceUpdate();
  }

  handleLogin(event) {
    event.preventDefault();
    console.log('1111');
  }

  render() {
    const { user } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={() => this.handleLogin()}>
                      <h1>
                        <FormattedMessage {...messages.Login} />
                      </h1>
                      <p className="text-muted">
                        <FormattedMessage
                          {...messages.sign_in_to_your_account}
                        />
                      </p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          onChange={event => this.changeElement(event)}
                          value={user.username}
                          id="username"
                          placeholder={messages.username.defaultMessage}
                          autoComplete="username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          onChange={event => this.changeElement(event)}
                          value={user.password}
                          id="password"
                          placeholder={messages.password.defaultMessage}
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            onClick={() => this.handleLogin()}
                            color="primary"
                            className="px-4"
                          >
                            <FormattedMessage {...messages.Login} />
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button
                            onClick={() =>
                              handleRedirectTo(this, ROUTER.FORGOT_PASSWORD)
                            }
                            color="link"
                            className="px-0"
                          >
                            <FormattedMessage {...messages.forgot_password} />
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;

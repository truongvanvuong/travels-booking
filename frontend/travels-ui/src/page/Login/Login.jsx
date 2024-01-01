import { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import AuthForm from "../../Components/AuthForm";
import Input from "../../Components/Input";
import loginImg from "../../assets/images/login.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="pt-4 lg:pt-[50px]">
      <Container>
        <Row>
          <Col lg="10" className="m-auto">
            <AuthForm
              img={loginImg}
              title="login"
              linkTo="register"
              linktext="register"
              paraText="Don't"
            >
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                  />
                </FormGroup>
                <button
                  className="w-full bg-headingColor text-white rounded-md py-2 hover:opacity-90 transition-opacity"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            </AuthForm>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;

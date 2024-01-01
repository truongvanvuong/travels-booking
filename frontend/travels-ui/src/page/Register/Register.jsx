import { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

import registerImg from "../../assets/images/register.png";
import AuthForm from "../../Components/AuthForm";
import Input from "../../Components/Input";
const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
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
              img={registerImg}
              title="register"
              linkTo="login"
              linktext="login"
              paraText="Already"
            >
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="User Name"
                    id="name"
                    onChange={handleChange}
                  />
                </FormGroup>
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
                  className="w-full bg-headingColor text-white rounded-md py-2 hover:opacity-90 transition-all"
                  type="submit"
                >
                  Register
                </button>
              </Form>
            </AuthForm>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;

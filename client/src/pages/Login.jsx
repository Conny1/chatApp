import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  /* outline: 1px solid red; */
  height: 50vh;
  width: 40%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Item = styled.div`
  outline: 1px solid gainsboro;
  height: 30px;
  width: 100%;
`;
const Input = styled.input`
  width: 97%;
  height: 97%;
  border: none;
`;
const Btn = styled.button`
  background-color: #000;
  color: #fff;
  max-width: 100px;
`;

export const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <Item>
          <Input type="email" placeholder="email" required />
        </Item>

        <Item>
          <Input type="password" placeholder="password" required />
        </Item>

        <Btn>Log in</Btn>

        <Link to="/register">Don&#39;t have an account? Register</Link>
      </Form>
    </Container>
  );
};

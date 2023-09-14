import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

export const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const btnRegister = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_URL);
    const results = await axios.post(
      `${import.meta.env.VITE_URL}/api/user/signup`,
      {
        name,
        email,
        password,
      }
    );

    const response = results?.data;
    // console.log(response);
    if (response?.sucess) {
      return navigate("/login");
    }
    if (response?.message) {
      alert(response?.message);
    }
  };

  return (
    <Container>
      <h1>Creat an account</h1>
      <Form>
        <Item>
          <Input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
            required
          />
        </Item>

        <Item>
          <Input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="email"
            required
          />
        </Item>

        <Item>
          <Input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="password"
            required
          />
        </Item>

        <Btn onClick={btnRegister}>Sign up</Btn>

        <Link to="/login">Already have an account? Login</Link>
      </Form>
    </Container>
  );
};

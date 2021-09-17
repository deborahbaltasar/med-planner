import React from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import rightSideImg from '../../assets/login-image.svg'
import logoImg from '../../assets/logo.svg'
import { Container, Leftside, RightSide } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  return (
    <Container>
      <Leftside>
        <Form>
          <img src={logoImg} alt="" />
          <Input icon={FiMail} name="email" placeholder="Email"/>

          <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>
  
          <Link>Esqueceu a senha?</Link>
      
          <Button>Entrar</Button>
        </Form>

      </Leftside>
      <RightSide>
        <img src={rightSideImg} alt="" />
      </RightSide>
    </Container>
  );
}

export default Login;
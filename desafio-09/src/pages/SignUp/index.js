import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <form>
        <input type="name" name="name" placeholder="Digite seu nome" />
        <input type="email" name="email" placeholder="Digite seu email" />
        <input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar</button>
        <Link to="/register">Já tenho uma conta</Link>
      </form>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <form>
        <input type="email" name="name" placeholder="Digite seu email" />
        <input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta grátis</Link>
      </form>
    </>
  );
}

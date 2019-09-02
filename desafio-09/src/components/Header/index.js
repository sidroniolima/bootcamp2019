import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Meetapp Logo" />

        <Profile>
          <div>
            <strong>Sidronio Lima</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="button">Sair</button>
        </Profile>
      </Content>
    </Container>
  );
}

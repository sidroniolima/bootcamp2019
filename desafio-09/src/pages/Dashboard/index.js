import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, Header, List } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <h1>Meus Meetups</h1>
        <Link to="/meetup">Novo Meetup</Link>
      </Header>
      <List>
        <li>
          <strong>Congresso Nacional de Criminalística</strong>
          <div>
            <span>14 de outubro de 2019</span>
            <MdKeyboardArrowRight color="#fff" size={24} />
          </div>
        </li>
        <li>
          <strong>Congresso Nacional de Criminalística</strong>
          <div>
            <span>14 de outubro de 2019</span>
            <MdKeyboardArrowRight color="#fff" size={24} />
          </div>
        </li>

        <li>
          <strong>Congresso Nacional de Criminalística</strong>
          <div>
            <span>14 de outubro de 2019</span>
            <MdKeyboardArrowRight color="#fff" size={24} />
          </div>
        </li>
      </List>
    </Container>
  );
}

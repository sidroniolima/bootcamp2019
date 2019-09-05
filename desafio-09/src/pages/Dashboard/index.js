import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { history } from '~/services/history';

import { Container, Header, List } from './styles';

export default function Dashboard() {
  function handleNewMeetupClick() {
    history.push('/meetup');
  }
  return (
    <Container>
      <Header>
        <h1>Meus Meetups</h1>
        <button onClick={handleNewMeetupClick}>Novo Meetup</button>
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

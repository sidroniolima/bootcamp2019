import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Meetup } from './styles';

export default function View() {
  return (
    <Container>
      <Header>
        <h1>Meetup de React</h1>
        <Link to="/meetup/20">Editar</Link>
        <button type="button">Cancelar</button>
      </Header>
      <Meetup>
        <img
          src="https://www.sarcos.eng.cam.ac.uk/images/ConferenceGrants/image"
          alt="Meetup de React"
        />
        <p>
          Este será um Meetup sobre React com viés tecnológico diferenciado com
          foco nas estilizações e conceitos responsivos.
        </p>
        <p>
          Caso queira participar deste Meetup mande um email para
          sidronio@sidroniolima.com.br
        </p>
        <span>24 e setembro, às 20h</span>
        <span>Centro Universitário UFF - Niterói</span>
      </Meetup>
    </Container>
  );
}

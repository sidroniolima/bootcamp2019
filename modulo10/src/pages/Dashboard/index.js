import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import {Container, Title, List} from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('/appointments');

      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

function IconTab({tintColor}) {
  return <Icon name="event" size={20} color={tintColor} />;
}

IconTab.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: IconTab,
};

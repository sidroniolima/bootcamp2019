import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Left, Avatar, Info, Name, Time} from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
      </Left>
      <Info>
        <Name>Sidronio Lima</Name>
        <Time>em 3 dias</Time>
      </Info>
      <TouchableOpacity>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}

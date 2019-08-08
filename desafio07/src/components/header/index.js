import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, BasketContainer, QtyBadge } from './styles';

export default function components() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <QtyBadge>15</QtyBadge>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

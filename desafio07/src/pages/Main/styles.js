import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  margin-top: 60px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-right: 15px;
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const Price = styled.Text`
  margin-top: 8px;
  font-size: 28px;
  color: ${colors.dark};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.primary};
  color: #fff;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const AddContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${darken(0.2, colors.primary)};
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Qty = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

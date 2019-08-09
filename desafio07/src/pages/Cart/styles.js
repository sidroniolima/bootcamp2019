import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  margin-top: 80px;
`;

export const Products = styled.View`
  background: #fff;
`;

export const Product = styled.View`
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  color: ${colors.dark};
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.dark};
  margin-top: auto;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  margin-top: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductSubtotal = styled.Text`
  flex: 1;
  color: ${colors.dark};
  font-size: 16px;
  text-align: right;
  font-weight: bold;
`;

export const TotalLabel = styled.Text`
  color: #bbb;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 15px;
  text-align: center;
`;

export const Total = styled.Text`
  color: ${colors.dark};
  font-size: 24px;
  margin-top: 5px;
  text-align: center;
`;

export const CheckoutButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 4px;
`;

export const CheckoutButtonText = styled.Text`
  text-align: center;
  color: #fff;
`;

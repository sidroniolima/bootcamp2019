import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalLabel,
  Total,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';
import colors from '../../styles/colors';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function handleUpdateAmountPress(product, operation) {
    if (operation === 'ADD') {
      updateAmountRequest(product.id, product.amount + 1);
    } else {
      updateAmountRequest(product.id, product.amount - 1);
    }
  }

  return (
    <Container>
      <Products>
        {cart.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.formattedPrice}</ProductPrice>
              </ProductDetails>
              <Icon
                name="delete-forever"
                size={20}
                color={colors.primary}
                onPress={() => removeFromCart(product.id)}
              />
            </ProductInfo>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  color={colors.primary}
                  size={20}
                  onPress={() => handleUpdateAmountPress(product, 'SUB')}
                />
              </ProductControlButton>

              <ProductAmount value={String(product.amount)} />
              <ProductControlButton>
                <Icon
                  name="add-circle-outline"
                  color={colors.primary}
                  size={20}
                  onPress={() => handleUpdateAmountPress(product, 'ADD')}
                />
              </ProductControlButton>
              <ProductSubtotal>{product.subtotal}</ProductSubtotal>
            </ProductControls>
          </Product>
        ))}

        <TotalLabel>Total</TotalLabel>
        <Total>{total}</Total>

        <CheckoutButton>
          <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
        </CheckoutButton>
      </Products>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

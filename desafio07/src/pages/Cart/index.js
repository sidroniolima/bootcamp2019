import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

class Cart extends Component {
  render() {
    return (
      <Container>
        <Products>
          <Product>
            <ProductInfo>
              <ProductImage
                source={{
                  uri:
                    'https://cdn.shopify.com/s/files/1/0008/2434/4691/products/PALM-COIN-EARRING-SET-GOLD-01_1024x1024_0fa87081-ef2b-4398-b595-6b1b242ca85e.png?v=1549849636',
                }}
              />
              <ProductDetails>
                <ProductTitle>
                  Brinco pendurado fashion dourado feminino
                </ProductTitle>
                <ProductPrice>R$ 179,99</ProductPrice>
              </ProductDetails>
              <Icon name="delete-forever" size={20} color={colors.primary} />
            </ProductInfo>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>

              <ProductAmount value="5" />
              <ProductControlButton>
                <Icon
                  name="add-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>
              <ProductSubtotal>R$ 179,99</ProductSubtotal>
            </ProductControls>
          </Product>
          <Product>
            <ProductInfo>
              <ProductImage
                source={{
                  uri:
                    'https://cdn.shopify.com/s/files/1/0008/2434/4691/products/PALM-COIN-EARRING-SET-GOLD-01_1024x1024_0fa87081-ef2b-4398-b595-6b1b242ca85e.png?v=1549849636',
                }}
              />
              <ProductDetails>
                <ProductTitle>
                  Brinco pendurado fashion dourado feminino
                </ProductTitle>
                <ProductPrice>R$ 179,99</ProductPrice>
              </ProductDetails>
              <Icon name="delete-forever" size={20} color={colors.primary} />
            </ProductInfo>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>

              <ProductAmount value="5" />
              <ProductControlButton>
                <Icon
                  name="add-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>
              <ProductSubtotal>R$ 179,99</ProductSubtotal>
            </ProductControls>
          </Product>
          <Product>
            <ProductInfo>
              <ProductImage
                source={{
                  uri:
                    'https://cdn.shopify.com/s/files/1/0008/2434/4691/products/PALM-COIN-EARRING-SET-GOLD-01_1024x1024_0fa87081-ef2b-4398-b595-6b1b242ca85e.png?v=1549849636',
                }}
              />
              <ProductDetails>
                <ProductTitle>
                  Brinco pendurado fashion dourado feminino
                </ProductTitle>
                <ProductPrice>R$ 179,99</ProductPrice>
              </ProductDetails>
              <Icon name="delete-forever" size={20} color={colors.primary} />
            </ProductInfo>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>

              <ProductAmount value="5" />
              <ProductControlButton>
                <Icon
                  name="add-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>
              <ProductSubtotal>R$ 179,99</ProductSubtotal>
            </ProductControls>
          </Product>
          <Product>
            <ProductInfo>
              <ProductImage
                source={{
                  uri:
                    'https://cdn.shopify.com/s/files/1/0008/2434/4691/products/PALM-COIN-EARRING-SET-GOLD-01_1024x1024_0fa87081-ef2b-4398-b595-6b1b242ca85e.png?v=1549849636',
                }}
              />
              <ProductDetails>
                <ProductTitle>
                  Brinco pendurado fashion dourado feminino
                </ProductTitle>
                <ProductPrice>R$ 179,99</ProductPrice>
              </ProductDetails>
              <Icon name="delete-forever" size={20} color={colors.primary} />
            </ProductInfo>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>

              <ProductAmount value="5" />
              <ProductControlButton>
                <Icon
                  name="add-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>
              <ProductSubtotal>R$ 179,99</ProductSubtotal>
            </ProductControls>
          </Product>
          <Product>
            <ProductInfo>
              <ProductImage
                source={{
                  uri:
                    'https://cdn.shopify.com/s/files/1/0008/2434/4691/products/PALM-COIN-EARRING-SET-GOLD-01_1024x1024_0fa87081-ef2b-4398-b595-6b1b242ca85e.png?v=1549849636',
                }}
              />
              <ProductDetails>
                <ProductTitle>
                  Brinco pendurado fashion dourado feminino
                </ProductTitle>
                <ProductPrice>R$ 179,99</ProductPrice>
              </ProductDetails>
              <Icon name="delete-forever" size={20} color={colors.primary} />
            </ProductInfo>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>

              <ProductAmount value="5" />
              <ProductControlButton>
                <Icon
                  name="add-circle-outline"
                  color={colors.primary}
                  size={20}
                />
              </ProductControlButton>
              <ProductSubtotal>R$ 179,99</ProductSubtotal>
            </ProductControls>
          </Product>

          <TotalLabel>Total</TotalLabel>
          <Total>R$ 765,32</Total>

          <CheckoutButton>
            <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
          </CheckoutButton>
        </Products>
      </Container>
    );
  }
}

export default Cart;

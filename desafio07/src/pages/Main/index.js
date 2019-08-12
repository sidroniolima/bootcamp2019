import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Product,
  Image,
  Description,
  Price,
  Button,
  AddContainer,
  Qty,
  ButtonText,
} from './styles';

class Main extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      products: []
    }
}

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(item => (
      {
        ...item,
        formattedPrice: formatPrice(item.price),
      }
    ))

    this.setState({products: data});
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container horizontal>

        {products.map((product) => (
          <Product key={product.id}>
            <Image
              source={{
                uri:
                  product.image,
              }}
            />
            <Description>{product.title}</Description>
            <Price>{product.formattedPrice}</Price>
            <Button onPress={() => this.handleAddProduct(product.id)}>
              <AddContainer>
                <Icon name="add-shopping-cart" size={14} color="#fff" />
                <Qty>{amount[product.id] || 0}</Qty>
              </AddContainer>
              <ButtonText>Adicionar</ButtonText>
            </Button>
          </Product>
        ))
        }

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
})

const mapDispatchToProps = dispatch => (bindActionCreators(CartActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Main);

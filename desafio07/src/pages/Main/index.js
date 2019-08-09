import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

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
        formattedPrice: formatPrice(item.price)
      }
    ))

    this.setState({products: data});
  }

  handleAddProduct = product => {
    const { dispatch, navigation } = this.props;

    dispatch({
      type: '@cart/ADD',
      product
    })

    navigation.navigate('Cart');
  }

  render() {
    const { products } = this.state;

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
            <Button onPress={() => this.handleAddProduct(product)}>
              <AddContainer>
                <Icon name="add-shopping-cart" size={14} color="#fff" />
                <Qty>3</Qty>
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
  cart: state.cart
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, null)(Main);

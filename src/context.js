import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();
//PROVIDER PROVIDE ALL INFORMATION FOR ALL APPLICATION
//CONSUMER


//CONTEXT API
class ProductProvider extends Component {


  //FOR TESTING AND RENDERING
  /*state = {
    products: storeProducts,
    detailProduct
  }*/


//FOR FUNCTIONAL RENDERING
  state = {
    products:[],
    detailProduct
  };
  componentDidMount(){
    this.setProducts();
  }
  setProducts =()=>{
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(()=>{
      return {products: tempProducts}
    })
  }







  handelDetail=()=>{
    console.log('hello from detail');
  }
  addToCart=()=>{
    console.log('hello from add to cart');
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        handelDetail: this.handelDetail ,
        addToCart: this.addToCart
        }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};

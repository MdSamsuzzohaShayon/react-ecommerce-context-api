import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
//import {storeProducts} from '../data';  // WE DON'T NEED STOREPRODUCTS BECAUSE WE ARE GRABBING DATA FROM CONTEXT API
import {ProductConsumer} from '../context';


export class ProductList extends Component {
  // WE DON'T NEED STATE BECAUSE WE ARE GRABBING DATA FROM CONTEXT API
  /*state = {
    products: storeProducts
  }*/
  render() {
    // console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"/>

            <div className="row">
              <ProductConsumer>
                {/* HERE WE ARE LOOPING ALL OF OUR PRODUCT AND RENDERING */}
                {value=>{
                  return value.products.map(product =>{
                    return <Product key={product.id} product={product} />
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProductList;

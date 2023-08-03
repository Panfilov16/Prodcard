import React from 'react';
import Title from "./title";
import Code from './code';
import Gallery from './gallery';
import OldPrice from './old-price';
import Price from './price';
import Counter from './counter';
import Dilivery from './dilivery';
import Description from './description';

function ProductPage({product}){
    return(
        <section>
          <Title>{product.name}</Title>
          <Code>{product.code}</Code>
          <div style={{display:'flex'}}>
            <Gallery src={product.src} alt={product.alt}/>
            <div>
              <p>Цена:<OldPrice value={product.oldPrice}/>{" "}
              <Price value={product.price} />
              </p>
              <p>
              <Counter />
              </p>
              <p>
              <Dilivery>{product.delivery}</Dilivery>
              </p>
              <button type='button'>Купить</button>
            </div>
          </div>
          <Description>{product.description}</Description>
        </section>
    )
}
export default ProductPage;
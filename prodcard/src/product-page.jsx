import React from 'react';
import Title from "./title";
import Code from './code';
import Gallery from './gallery';
import Counter from './counter';
import Dilivery from './dilivery';
import Description from './description';
import FullPrice from './full-price';
import Comments from './comments';

function ProductPage({product}){
  
    return(
        <section>
          <Title>{product.name}</Title>
          <Code>{product.code}</Code>
          <div style={{display:'flex'}}>
            <Gallery src={product.src} alt={product.alt}/>
            <div>
              <p>
              Цена: <FullPrice oldPrice={product.oldPrice} price={product.price} />
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
          <Comments comments={product.comments}></Comments>
        </section>
    )
}
export default ProductPage;
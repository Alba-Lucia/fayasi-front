import React from 'react'
import ProductItem from './ProductItem'
import Title from './Title/Titles'

const ProductList = ({ productList }) => {
  return (
    <div>
      <h2 className='font-custom'></h2>
      <Title text='Nuestro catálogo'></Title>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center'>
        {productList.map((product, index) => index<12&& (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList

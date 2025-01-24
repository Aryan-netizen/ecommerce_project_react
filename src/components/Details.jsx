import axios from '../utils/axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';
import { ProductContext } from '../utils/Context';
//                                                        1:05:00

function Details() {
  const [products,setproducts]=useContext(ProductContext)
  const [product, setProduct] = useState(null)
  const {id} = useParams();
  const getSingleProduct = async () =>{
    try {
      const {data}=await axios.get(`/products/${id}`)
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSingleProduct()
  }, [])
  

  return product?(
    <div className='w-[70%] h-full mx-auto py-[10%] flex justify-center items-center'>
        <img className='h-[80%] w-[40%] object-contain' src={product.image} alt="" />
        <div className='content w-[50%]'>
            <h1 className='text-4xl'>{product.title}</h1>
            <h3 className='text-zinc-400 my-5'>{product.category}</h3>
            <h2 className='text-red-300 mb-3'>$ {product.price} </h2>
            <p className='mb-[5%]'>{product.description}</p>
            <Link className='py-3 px-5 border rounded mr-3 border-blue-200 text-blue-300'>Edit</Link>
            <Link className='py-3 px-5 border rounded m-3 border-red-200 text-red-300'>Delete</Link>
        </div>
    </div>
  ):<Loading/>
}

export default Details
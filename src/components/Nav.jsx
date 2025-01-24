import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc,cv)=>[...acc,cv.category],[])
  distinct_category=[...new Set(distinct_category)]

  const color = () => {
    return `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},0.5)`;
  };

  return (
    <>
        <nav className='h-full w-[15%] bg-zinc-100 flex flex-col items-center'>
        <a className='py-3 px-5 border rounded m-3 border-blue-200 text-blue-300' href="/create">Add New Product</a>
        <hr className='my-3 w-[80%]' /> 
        <h1 className='text-2xl mb-3 w-[80%]'>Catergory Filter</h1>
        <div className='w-[80%]'>
          {distinct_category.map((c,i)=>
          <Link key={i} to={`/?category=${c}`} className='mb-3 flex items-center'><span style={{backgroundColor: color()}} className='w-[15px] h-[15px] rounded-full mr-2'></span> {c}</Link>
          )}
        </div>
      </nav>
      </>
  )
}

export default Nav
import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);
  const [filteredProducts, setfilteredProducts] = useState(null)
  const {search}= useLocation();
  const category = decodeURIComponent(search.split("=")[1])

  const getCategoryProduct = async()=>{
    try {
      const {data}=await axios(`/products/category/${category}`)
      setfilteredProducts(data)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (!filteredProducts || category=="undefined") setfilteredProducts(products)
    if (category != "undefined") getCategoryProduct()
  }, [category,products])
  


  return products ? (
    <>
    
      <Nav />

      <div className="h-full w-[85%] p-5 pt-[5%] flex flex-wrap gap-3 overflow-x-hidden overflow-y-auto">
        {
          filteredProducts && filteredProducts.map((product, i) =>(
            <Link
                key={i}
                to={`/details/${product.id}`}
                className="card group p-5 border shadow rounded w-[18%] flex justify-center items-center flex-col"
              >
                <div className="w-full h-[80%] mb-5 group-hover:scale-110">
                  <img
                    className="w-full h-full object-contain bg-no bg-repeat"
                    src={product.image}
                    alt=""
                  />
                </div>
                <h1 className="group-hover:text-blue-300">{product.title}</h1>
              </Link>
          ))
        }
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;

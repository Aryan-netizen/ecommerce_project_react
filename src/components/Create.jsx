import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [products,setproducts]=useContext(ProductContext)
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const AddProductHandler =(e)=>{
    e.preventDefault();
    if(title.trim().length <5 || image.trim().length <5 || category.trim().length <5 || price.trim().length <1 || description.trim().length <5){
      alert("All fields should be at least 5 characters long.")
      return;
    }
    const product = {id:nanoid(), title, image, category, price, description};
    setproducts([...products,product])
    // localStorage.setItem("products",JSON.stringify([...products,product])); 
    navigate("/")
}
  return (
    <form onSubmit={AddProductHandler} 
    className="p-[5%] w-screen h-screen flex flex-col items-center">
      <h1 className="mb-5 w-1/2 text-3xl">Add new Product</h1>
      <input
        value={image}
        onChange={(e) => setimage(e.target.value)}
        type="url"
        placeholder="image link"
        className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-3"
      />
      <input
        value={title}
        onChange={(e) => settitle(e.target.value)}
        type="text"
        placeholder="title"
        className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-3"
      />
      <div className="w-1/2 flex justify-between">
        <input
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          type="text"
          placeholder="category"
          className="text-xl bg-zinc-100 rounded p-4 w-[48%] mb-3"
        />
        <input
          value={price}
          onChange={(e) => setprice(e.target.value)}
          type="number"
          placeholder="price"
          className="text-xl bg-zinc-100 rounded p-4 w-[48%] mb-3"
        />
      </div>
      <textarea name="" id="" rows="10" value={description} placeholder="enter product description here..."
          onChange={(e) => setdescription(e.target.value)} className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-3"></textarea>
        <div className="w-1/2">
         <button className=' py-3 px-5 border rounded m-3 border-blue-200 text-blue-300'>Add New Product</button>
        </div>

    </form>
  );
}

export default Create;

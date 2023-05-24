import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
function Products() {
    const data=async()=>{
        const products = await axios.get("https://fakestoreapi.com/products")
        setProductsData(products.data)
    }
    const [productsData,setProductsData]=useState([])

    useEffect(()=>{
data();
    },[])

console.log(productsData);
  return (
    <>
    <div className="d-flex justify-content-evenly flex-wrap">
    {productsData.map((item)=>{
        return(
        <div className="card" style={{width: "18rem"}}>
  <img src={item.image} className="card-img-top w-50 h-50" alt={item.title}/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <Link to={`${item.id}`} className="btn btn-primary">{"$"+item.price}</Link>
  </div>
  </div>
        )
    })}
    </div>
    </>
  )
}

export default Products
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Counter from "../components/Counter"

function CardDetails() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setSingleData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {singleData ? (
        <div className='row'>
          <div className="col-6  d-flex justify-content-center align-items-center">
          <img src={singleData.image} alt={singleData.title} className='w-50 h-75' />
          </div>
          <div className="col-6  d-flex flex-column justify-content-center align-items-start">
          <h1>{singleData.title}</h1>
          <p className='w-75'>{singleData.description}</p>
          <Counter/>
          <button className='btn btn-primary mt-3'>{"$"+singleData.price}</button>
          </div>
  
        </div>
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" className='d-flex justify-content-center align-items-center'/>
      )}
    </div>
  )
}

export default CardDetails;

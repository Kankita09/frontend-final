import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux'
//import apiCall from '../apis/apiCall';
// import axios from 'axios'
import { fetchProducts} from '../redux/actions/productActions';
// const URL = 'https://fakestoreapi.com/products'
 function ProductList(props){
    const products= useSelector(state => state)
    const dispatch = useDispatch()
     
    // const fetchProducts=async()=>{
    //     //    const response = await axios.get(URL)
    //     const response = await apiCall.get('/products')
    //     dispatch(setProducts(response.data))
    // }



   useEffect(() =>{
     dispatch(fetchProducts())
   },[])
   console.log(products);
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
 }

 export default ProductList;
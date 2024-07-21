import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, fetchProducts, seelectedProducts } from '../redux/actions/productActions';
import apiCall from '../apis/apiCall';
// import { setProducts } from '../redux/actions/productActions';

function ProductDetails(props) {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const { id, title, category, image, price, description } = product
    const { pid } = useParams()
    // console.log(pid);

    // const fetchProducts = async () => {
    //     const response = await apiCall.get(`/products/${pid}`)
    //     dispatch(seelectedProducts(response.data))
    // }
    console.log(product)
    useEffect(() => {
        dispatch(fetchProduct(pid))
    }, [pid])

    return (
        <div className='ui grid container'>
            <div className='ui placeholder segment '>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'>AND</div>
                    <div className='middle aligned row'>
                        <div className='column lp'>
                            <img className='ui fluid image' src={image} alt={image} /> </div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                                <a className='ui teal tag label' href='price'>${price}</a>
                            </h2>
                            <h3 className='ui brown black header'>{category}</h3>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex='0'>
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'>Add To Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
import apiCall from "../../apis/apiCall"
import { ActionTypes } from "../constants/action-types"
import axios from 'axios'

export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const fetchProducts=(id)=>async(dispatch)=>{
    const response =await apiCall.get(`/loaddata`)
    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
}

export const fetchProduct=(id)=>async(dispatch)=>{
    const response =await apiCall.get(`/loaddata/${id}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
}

export const seelectedProducts=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}


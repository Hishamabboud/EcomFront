import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {

            const response = await fetch("https://localhost:44306/api/product/${id}", {
                method: "Get",
                headers: {'Content-Type': "application/json"},
                credentials: 'include',
                mode: "cors",
            });
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
                Loading.....
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
                Loading.....
            </>
        )
    }
    return(
        <div>
        <div className = "container">
            <div className = "row">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
        </div>
    );

}
export default Product;

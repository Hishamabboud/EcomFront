import React, {useState, useEffect, SyntheticEvent} from "react";



const Products = () => {

    const [price, setPrice] = useState('');
    const [pictures, setPictures] = useState([]);
    const [description, setDescription] = useState(false);
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    let componentMounted = true;

        useEffect(() => {
            const getProducts = async () => {
                setLoading(true);
                const response = await fetch("https://localhost:44306/api/product", {
                    method: "Post",
                    headers: {'Content-Type': "application/json"},
                    credentials: 'include',
                    mode: "cors",
                });
                if (componentMounted) {
                    setData(await response.clone().json());
                    setFilter(await response.json());
                    setLoading(false);
                    console.log(filter);
                }
            }

        })

    return(
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                     <h1 className = "display-6 fw-bolder text-center">{name}</h1>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
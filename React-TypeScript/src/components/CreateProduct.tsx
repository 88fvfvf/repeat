import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { Error } from "./Error";

const addProduct: IProduct = {
    id: 321,
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 3.2,
        count: 5
    }
}

interface ICreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: ICreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('')

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('')
        if (value.trim().length === 0) {
            setError('Input empty!!!')
            return
        }

        addProduct.title = value

        const myAddData = await axios.post<IProduct>('https://fakestoreapi.com/products', addProduct)

        onCreate(myAddData.data)    
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler}
            />

            {error && <Error error={error} />}

            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    );
}

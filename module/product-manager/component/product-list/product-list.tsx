'use client';
import React, { useState } from 'react';
import "./product-list.scss";
import { Input } from '@/core/components/input';
import { ChevronDown, SquarePen, Trash2 } from 'lucide-react';
import { Button } from '@/core/components/button';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
type Product = {
    _id:string,
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    count: number;
    photo: string
};

const ProductList = () => {
    const fetchGroups = async (): Promise<Product[]> => {
        const response = await axios.get('http://localhost:8080/product/all');
        return response.data;
    };

    const { data, error, isError, isLoading } = useQuery<Product[]>({
        queryKey: ['groups'],
        queryFn: fetchGroups
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;



    return (
        <div className='product-list-content'>
            <div className='product-list-content-top-bar'>
                <div className='top-bar-left-child'>
                    <div className='top-bar-left-child-drop'>
                        <div className='top-bar-left-child-drop-menu'>
                            Sıralama
                            <ChevronDown size={15} />
                        </div>
                        <div className='dropdown'>
                            <a href="#" className='dropdown-item'>Item 1</a>
                            <a href="#" className='dropdown-item'>Item 2</a>
                            <a href="#" className='dropdown-item'>Item 3</a>
                        </div>
                    </div>
                </div>
                <div className='top-bar-right-child'>
                    <Input size='small' />
                </div>
            </div>
            <div className='product-list-content'>
                <table className='product-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Stock</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    {<tbody>
                        {data && data.map((product) => (
                            <tr className='table-body' key={product.id}>
                                <td className='table-name'>
                                   
                                    <div>{product.name}</div>
                                </td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.count}</td>
                                <td className='table-edit'>
                                    <Trash2 onClick={()=>console.log(product._id)} size={20} className='table-deleted' />
                                    <SquarePen size={20} className='table-updated' />
                                </td>
                            </tr>
                        ))}
                    </tbody>}
                </table>
            </div>
        </div>
    );
};

export default ProductList;

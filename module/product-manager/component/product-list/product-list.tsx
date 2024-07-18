import React, { useState } from 'react';
import "./product-list.scss";
import { Input } from '@/core/components/input';
import { ChevronDown, CircleCheckBig, SquarePen, Trash2 } from 'lucide-react';
import { Modal } from '@/core/components/modal/modal';
import classNames from 'classnames';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

type Product = {
    _id: string;
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    count: number;
    photo: string;
};

const ProductList = ({initialProducts}:any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const [editableProductId, setEditableProductId] = useState<string | null>(null);
    const [editedProduct, setEditedProduct] = useState<Partial<Product>>({});
    const [sortField, setSortField] = useState<keyof Product | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const queryClient = useQueryClient();
    console.log(initialProducts)
    const fetchProducts = async (): Promise<Product[]> => {
        const response = await axios.get( process.env.NEXT_PUBLIC_API_URL+'/product/all');
        return response.data;
    };

    const { data, error, isError, isLoading } = useQuery<Product[]>({
        queryKey: ['product'],
        queryFn: fetchProducts
    });

    const updateProductApi = async (updatedProduct: Partial<Product>) => {
        await axios.put(`http://localhost:8080/product/${updatedProduct._id}`, updatedProduct);
    };

    const deleteProductApi = async (productId: string) => {
        await axios.delete(`http://localhost:8080/product/${productId}`);
    };

    const handleDeleteProduct = (productId: string) => {
        setSelectedProductId(productId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProductId(null);
    };

 console.log(process.env.NEXT_PUBLIC_API_URL)

    const acceptModal = async () => {
        if (selectedProductId) {
            await deleteProductApi(selectedProductId);
            await queryClient.invalidateQueries(
                {
                    queryKey: ['product'],
                    refetchType: 'active',
                },
            )
            setSelectedProductId(null);
        }
        setIsModalOpen(false);
    };

    const handleEditProduct = (field: keyof Product, value: string | number) => {
        setEditedProduct((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleInput = (e: any, field: keyof Product) => {
        const target = e.target as HTMLDivElement;
        handleEditProduct(field, target.innerText);

        setTimeout(() => {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(target);
            range.collapse(false);
            selection?.removeAllRanges();
            selection?.addRange(range);
        }, 0);
    };

    const handleSaveEdit = async () => {
        if (editableProductId) {
            await updateProductApi({ ...editedProduct, _id: editableProductId });
            await queryClient.invalidateQueries(
                {
                    queryKey: ['product'],
                    refetchType: 'active',
                },
            );
            setEditableProductId(null);
            setEditedProduct({});
        }
    };

    const handleSort = (field: keyof Product) => {
        setSortField(field);
    };

    const sortedData = React.useMemo(() => {
        if (!data) return [];

        let filteredData = data.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (!sortField) return filteredData;

        return filteredData.sort((a, b) => {
            if (typeof a[sortField] === 'number' && typeof b[sortField] === 'number') {
                return a[sortField] - b[sortField];
            }
            if (typeof a[sortField] === 'string' && typeof b[sortField] === 'string') {
                return a[sortField].localeCompare(b[sortField]);
            }
            return 0;
        });
    }, [data, sortField, searchTerm]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className='product-list-content'>
            {isModalOpen && (
                <Modal size="small" variant="success" onClose={closeModal} onAccept={acceptModal}>
                    <h2>Confirm Delete</h2>
                    <p>Are you sure you want to delete this product?</p>
                </Modal>
            )}
            <div className='product-list-content-top-bar'>
                <div className='top-bar-left-child'>
                    <div className='top-bar-left-child-drop'>
                        <div className='top-bar-left-child-drop-menu'>
                            Sıralama
                            <ChevronDown size={15} />
                        </div>
                        <div className='dropdown'>
                            <a href="#" className='dropdown-item' onClick={() => handleSort('price')}>Fiyata Göre</a>
                            <a href="#" className='dropdown-item' onClick={() => handleSort('count')}>Stoka Göre</a>
                        </div>
                    </div>
                </div>
                <div className='top-bar-right-child'>
                    <Input
                        size='small'
                        placeholder='Ara...'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
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
                    <tbody>
                        {sortedData && sortedData.map((product) => (
                            <tr className='table-body' key={product.id}>
                                <td className={classNames({ editable: editableProductId === product._id })}>
                                    <div
                                        contentEditable={editableProductId === product._id}
                                        onInput={(e) => handleInput(e, 'name')}
                                    >
                                        {editableProductId === product._id ? editedProduct.name : product.name}
                                    </div>
                                </td>
                                <td className={classNames({ editable: editableProductId === product._id })}>
                                    <div
                                        contentEditable={editableProductId === product._id}
                                        onInput={(e) => handleInput(e, 'description')}
                                    >
                                        {editableProductId === product._id ? editedProduct.description : product.description}
                                    </div>
                                </td>
                                <td className={classNames({ editable: editableProductId === product._id })}>
                                    <div
                                        contentEditable={editableProductId === product._id}
                                        onInput={(e) => handleInput(e, 'price')}
                                    >
                                        {editableProductId === product._id ? editedProduct.price : product.price}
                                    </div>
                                </td>
                                <td className={classNames({ editable: editableProductId === product._id })}>
                                    <div
                                        contentEditable={editableProductId === product._id}
                                        onInput={(e) => handleInput(e, 'category')}
                                    >
                                        {editableProductId === product._id ? editedProduct.category : product.category}
                                    </div>
                                </td>
                                <td className={classNames({ editable: editableProductId === product._id })}>
                                    <div
                                        contentEditable={editableProductId === product._id}
                                        onInput={(e) => handleInput(e, 'count')}
                                    >
                                        {editableProductId === product._id ? editedProduct.count : product.count}
                                    </div>
                                </td>
                                <td className='table-edit'>
                                    <Trash2 onClick={() => handleDeleteProduct(product._id)} size={20} className='table-deleted' />
                                    {editableProductId === product._id ? (
                                        <CircleCheckBig
                                            size={20}
                                            className='table-updated'
                                            onClick={handleSaveEdit}
                                        />
                                    ) : (
                                        <SquarePen
                                            size={20}
                                            className='table-updated'
                                            onClick={() => {
                                                setEditableProductId(product._id);
                                                setEditedProduct(product);
                                            }}
                                        />
                                    )}
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};





export default ProductList;



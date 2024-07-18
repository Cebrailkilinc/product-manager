import axios from 'axios';
import { Inputs, Product } from '../type/prduct-manager.type';
import { useGlobalContext } from '../context/store';
const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';


export class ProductService {
    
    public async fetchProducts(): Promise<Product[]> {
        const response = await axios.get(`${apiUrl}/product/all`);
        return response.data;
    }

    public async updateProductApi(updatedProduct: Partial<Product>) {
        if (!updatedProduct._id) {
            throw new Error('Product ID is required to update a product');
        }
        await axios.put(`${apiUrl}/product/${updatedProduct._id}`, updatedProduct);
    }

    public async deleteProductApi(productId: string) {
        await axios.delete(`${apiUrl}/product/${productId}`);
    }

    public async addProductApi(sendDataOfAddProduct: Partial<Inputs>) {
        try {
            const response = await axios.post(`${apiUrl}/product/add`, sendDataOfAddProduct);
            console.log('Product added successfully:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error adding product:', error.response?.data?.message || error.message);
            } else {
                console.error('Unexpected error:', (error as Error).message);
            }
        }
    }
}



"use client"
import React, { useState } from 'react';
import './add-product.scss';

//COMPONENT
import { Input } from '@/core/components/input';
import { Button } from '@/core/components/button';
import { Loading } from '@/core/components/loading';
//LIBRARY
import { ImagePlus, Trash2 } from 'lucide-react';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { nanoid } from 'nanoid'
import { useGlobalContext } from '../../context/store';
//CLASS
import { ProductService } from "../../service/productService"

//TYpES
import { Inputs } from "../../type/prduct-manager.type"


const AddProduct = () => {

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const productService = new ProductService;

  const { isSpinner, setIsSpinner } = useGlobalContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    setIsSpinner(true)
    const sendDataOfAddProduct = {
      id: nanoid(),
      name: data.name,
      sellerName: data.sellerName,
      description: data.description,
      count: data.count,
      price: data.price,
      category: data.category,
      photo: imagePreview
    }
    
    productService.addProductApi(sendDataOfAddProduct).then(res => setIsSpinner(false))
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='add-product-form'>
      {isSpinner && <Loading message='lütfen bekleyin' />}
      <h1 className='add-product-form-head'>Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='add-product-form-content'>
        <div className='add-product-form-content-item'>
          <Input
            placeholder='Product Name'
            size='large'
            variant='primary'
            {...register("name", { required: true })}
          />
          <div className='form-required-message-content'>
            {errors.name && <span className='form-required-message'>This field is required</span>}
          </div>
        </div>
        <div className='add-product-form-content-item'>
          <Input
            placeholder='Seller Name'
            size='large'
            variant='primary'
            {...register("sellerName", { required: true })}
          />
          <div className='form-required-message-content'>
            {errors.sellerName && <span className='form-required-message'>This field is required</span>}
          </div>
        </div>
        <div className='content-photo-textarea'>
          <div className='add-product-form-content-item'>
            <textarea
              placeholder='Description'
              className='add-product-text-area'
              {...register("description", { required: true })}
            />
            <div className='form-required-message-content'>
              {errors.description && <span className='form-required-message'>This field is required</span>}
            </div>
          </div>
          <div className='content-photo'>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="image-upload"
              {...register("image", { required: true })}
              onChange={handleImageUpload}
            />
            {imagePreview ? null :
              <label htmlFor="image-upload" className='content-photo-label'>
                <ImagePlus size={50} className='content-photo-icon' />
                <span>Add Product Photo</span>
              </label>
            }

            {imagePreview && (
              <div className='image-preview'>
                <img className='image-preview-image' src={imagePreview} alt="Product Preview" />
                <Trash2 onClick={() => setImagePreview(null)} className='image-preview-delete' />
              </div>
            )}

          </div>

        </div>

        <div className='add-product-form-content-item' >
          <Input
            min={0}
            type='number'
            placeholder='Count'
            size='large'
            variant='primary'
            {...register("count", { required: true, min: 0 })}
          />
          <div className='form-required-message-content'>
            {errors.count && <span className='form-required-message'>Count must be at least 0</span>}
          </div>

        </div>
        <div className='add-product-form-content-item' >
          <Input
            placeholder='Category'
            size='large'
            variant='primary'
            {...register("category", { required: true, min: 0 })}
          />
          <div className='form-required-message-content'>
            {errors.count && <span className='form-required-message'>Count must be at least 0</span>}
          </div>

        </div>
        <div className='add-product-form-content-item'>
          <Input
            min={0}
            type='number'
            placeholder='Price'
            size='large'
            variant='primary'
            {...register("price", { required: true, min: 0 },)}
          />
          <div className='form-required-message-content'>
            {errors.price && <span className='form-required-message'>Price must be at least 0</span>}
          </div>

        </div>
        <Button type="submit" size='large' variant='primary'>Add product</Button>
      </form>
    </div>
  );
};

export default AddProduct;

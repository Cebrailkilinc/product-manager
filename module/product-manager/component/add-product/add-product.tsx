"use client"
import React, { useState } from 'react';
import './add-product.scss';
import { Input } from '@/core/components/input';
import { Button } from '@/core/components/button';
import { ImagePlus, Trash2 } from 'lucide-react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  productName: string;
  sellerName: string;
  description: string;
  count: number;
  price: number;
  image: string;
};

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Submitting:", data);
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
      <h1 className='add-product-form-head'>Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='add-product-form-content'>
        <div className='add-product-form-content-item'>
          <Input
            placeholder='Product Name'
            size='large'
            variant='primary'
            {...register("productName", { required: true })}
          />
          {errors.productName && <span className='form-required-message'>This field is required</span>}
        </div>
        <div className='add-product-form-content-item'>
          <Input
            placeholder='Seller Name'
            size='large'
            variant='primary'
            {...register("sellerName", { required: true })}
          />
          {errors.sellerName && <span className='form-required-message'>This field is required</span>}
        </div>

        <div className='content-photo-textarea'>
          <div className='add-product-form-content-item'>
            <textarea
              placeholder='Description'
              className='add-product-text-area'
              {...register("description", { required: true })}
            />
            {errors.description && <span className='form-required-message'>This field is required</span>}
          </div>
          <div className='content-photo'>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="image-upload"
              {...register("image",{required:true})}
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
        {errors.count && <span className='form-required-message'>Count must be at least 0</span>}
        <div className='add-product-form-content-item' >
          <Input
            min={0}
            type='number'
            placeholder='Count'
            size='large'
            variant='primary'
            {...register("count", { required: true, min: 0 })}
          />
          {errors.count && <span className='form-required-message'>Count must be at least 0</span>}
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
          {errors.price && <span className='form-required-message'>Price must be at least 0</span>}
        </div>
        <Button type="submit" size='large' variant='primary'>Add product</Button>
      </form>
    </div>
  );
};

export default AddProduct;
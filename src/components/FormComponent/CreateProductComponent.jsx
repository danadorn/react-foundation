import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    brand: yup.string().required("Brand is required"),
    model: yup.string().required("Model is required"),
    color: yup.string().required("Color is required"),
    category: yup.string().required("Category is required"),
    discount: yup.number()
        .typeError("Discount must be a number")
        .min(0, "Discount cannot be negative")
        .max(100, "Discount cannot exceed 100")
    });
    

export default function CreateProductComponent() {
    const [editingId, setEditingId] = useState(null);
    const [products, setProducts] = useState([]);
    
    const { register, handleSubmit, formState:{errors}, reset, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            brand: "",
            model: "",
            color: "",
            category: "",
            discount: 0
        }
    });

    
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    const onSubmit = async (data) => {
        if (editingId) {
            await handleUpdate(data);
        } else {
            await handleCreate(data);
        }
    };


    const handleCreate = async (data) => {
        try {
            const response = await fetch("https://fakestoreapi.com/products", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const newProduct = await response.json();
            setProducts([...products, newProduct]);
            reset();
            alert('Product created successfully!');
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };


    const handleUpdate = async (data) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${editingId}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const updatedProduct = await response.json();
            setProducts(products.map(p => p.id === editingId ? updatedProduct : p));
            setEditingId(null);
            reset();
            alert('Product updated successfully!');
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };


    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await fetch(`https://fakestoreapi.com/products/${id}`, {
                    method: "DELETE"
                });
                setProducts(products.filter(p => p.id !== id));
                alert('Product deleted successfully!');
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    };


    const handleEdit = (product) => {
        setEditingId(product.id);
        setValue("title", product.title);
        setValue("brand", product.brand);
        setValue("model", product.model);
        setValue("color", product.color);
        setValue("category", product.category);
        setValue("discount", product.discount);
    };
    // const handleCreateSubmit = async (data) => {
    //     try {
    //         const response = await fetch("https://fakestoreapi.in/api/products", {
    //             method: "POST",
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 title: data.title,
    //                 brand: data.brand,
    //                 model: data.model,
    //                 color: data.color,  
    //                 category: data.category,
    //                 discount: 0,
    //             })
    //         });
    //         const result = await response.json();
    //         console.log("Created product:", result);
    //     } catch (error) {
    //         console.error("Error creating product:", error);
    //     }
    // };

    return (
    <div className="max-w-2xl mx-auto p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4 border border-gray-100 p-4 mx-auto">
            {/* title */}
            <div>
                <div className="mb-2 block">
                    <label htmlFor="email1">Title</label>
                </div>
                <input 
                    className="border p-2 rounded"
                    type="text"
                    {...register("title")}
                    placeholder="Enter title of product"
                />
                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                )}
            </div>

            {/* brand */}
            <div>
                <div className="mb-2 block">
                    <label htmlFor="email1">Brand</label>
                </div>
                <input 
                    className="border p-2 rounded"
                    type="text"
                    {...register("brand")}
                    placeholder="Enter your product brand"
                />
                {errors.brand && (
                    <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>
                )}
            </div>

            {/* model */}
            <div>
                <div className="mb-2 block">
                    <label htmlFor="email1">Model</label>
                </div>
                <input 
                    className="border p-2 rounded"
                    type="text"
                    {...register("model")}
                    placeholder="Enter your product model"
                />
                {errors.model && (
                    <p className="text-red-500 text-sm mt-1">{errors.model.message}</p>
                )}
            </div>

            {/* color */}
            <div>
                <div className="mb-2 block">
                    <label htmlFor="email1">Color</label>
                </div>
                <input 
                    className="border p-2 rounded"
                    type="text"
                    {...register("color")}
                    placeholder="Enter your product color"
                />
                {errors.color && (
                    <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
                )}
            </div>

            {/* category */}
            <div>
                <div className="mb-2 block">
                    <label htmlFor="email1">Category</label>
                </div>
                <input type="text" 
                    className="border p-2 rounded"
                    {...register("category")}
                    placeholder="Enter your product category"
                />
                {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                )}
            </div>

            {/* discount */}
            <div>
                <div className="mb-2 block">
                    <label htmlFor="email1">Discount</label>
                </div>
                <input type="number" 
                    className="border p-2 rounded"
                    {...register("discount")}
                    placeholder="Enter the discount value"
                />
                {errors.discount && (
                    <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>
                )}
            </div>

            {/* submit */}
            <div className="flex gap-2">
                <button type="submit" 
                    className="bg-blue-500 text-white p-4 rounded flex-1">
                    {editingId ? 'Update Product' : 'Create Product'}
                </button>
                {editingId && (
                    <button 
                        type="button"
                        onClick={() => {
                            setEditingId(null);
                            reset();
                        }}
                        className="bg-gray-500 text-white p-4 rounded">
                        Cancel
                    </button>
                )}
            </div>
        </form>

        {/* Products List */}
        {products && products.length > 0 && (
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Products List</h2>
                <div className="grid gap-4">
                    {products.map((product) => (
                        <div key={product.id} 
                             className="border p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">{product.title}</h3>
                                <p className="text-sm text-gray-600">
                                    {product.category} - {product.brand} {product.model}
                                </p>
                                <p className="text-sm">Discount: {product.discount}%</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(product)}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
)};
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const [imageFile, setImageFile] = useState('')

    const imageStorageKey = '3f5c896dc5cc2341c9bea4a235c26e79';

    const handleImage = (e) => {
        setImageFile(e.target.files[0])
    }

    const handleAddProduct = (e) => {
        e.preventDefault();

        const imageURL = imageFile
        const formData = new FormData();
        formData.append("image", imageURL);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const name = e.target.name.value;
                    const price = e.target.price.value;
                    const stock = e.target.stock.value;
                    const selectUnit = e.target.selectUnit.value;

                    const product = { name, price, stock, image, selectUnit }

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product added successfully')
                            }
                        })
                    e.target.reset();
                }
            })
    }
    return (

        <div>
            <h1 className='text-4xl md:text-5xl text-white mb-10 mt-16 md:mt-0 tracking-widest font-semibold'>Add a Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="card-body p-3 md:p-8 w-full md:w-3/6 mx-auto  rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg">Name:</span>
                        </label>
                        <input type="text" placeholder='Product name' className="input input-bordered" name='name' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg">Price</span>
                        </label>
                        <input type="number" placeholder='Product price' className="input input-bordered" name='price' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg">Avaiable Stock</span>
                        </label>
                        <input type="number" placeholder='stock' className="input input-bordered" name='stock' required />
                    </div>

                    <select className="select select-bordered w-full mt-6" name='selectUnit' required>
                        <option disabled selected>Select Unit</option>
                        <option value='kg'>kg</option>
                        <option value='pcs'>pcs</option>
                        <option value='littre'>L</option>
                    </select>

                    <input onChange={handleImage} type="file" name='file' className="mt-5 file-input file-input-bordered w-full " required />

                    <div className="card-actions justify-center w-full mt-5">
                        <button type='submit' className='signInBtn'>Add Product
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddProduct;
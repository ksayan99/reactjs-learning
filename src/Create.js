import Header, { Logo } from './Header';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Create() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [info, setInfo] = useState('');
    const [file, setFile] = useState('');

    async function AddProduct() {
        const formData = new FormData();
        formData.append('product_name', name);
        formData.append('product_price', price);
        formData.append('product_info', info);
        formData.append('product_file', file);
        await fetch('http://localhost:8000/api/addproduct', {
            method: 'POST',
            body: formData
        });
        alert('Product Listing Created Successfully');
    }

    return (
        <>
            <Header /><Logo />
            <div className='col-sm-4 offset-sm-4'>
                <h3>Add Product</h3><p />
                <input type='text' placeholder='Enter Product Name' className='form-control'
                    value={name} onChange={(e) => setName(e.target.value)} /><p />

                <input type='text' placeholder='Enter Product Price' className='form-control'
                    value={price} onChange={(e) => setPrice(e.target.value)} /><p />

                <input type='file' placeholder='Choose an Image' className='form-control'
                    onChange={(e) => setFile(e.target.files[0])} /><p />

                <input type='textarea' placeholder='Product Description' className='form-control'
                    value={info} onChange={(e) => setInfo(e.target.value)} /><p />

                <Button onClick={AddProduct}> Add Product </Button>
            </div>
        </>
    )
}
export default Create
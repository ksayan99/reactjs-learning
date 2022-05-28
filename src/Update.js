import Header, { Logo } from './Header';
import Swal from 'sweetalert2'
import { withRouter, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


function Update(props) {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [info, setInfo] = useState('');
    const [file, setFile] = useState('');
    const history = useHistory();
    const Swal = require('sweetalert2');

    useEffect(async () => {
        let result = await fetch('http://localhost:8000/api/getproductbyid/' + props.match.params.id);
        result = await result.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setInfo(result.description);
        setFile(result.filepath);
    }, []);

    async function EditById(uid) {
        const formData = new FormData();
        formData.append('product_name', name);
        formData.append('product_price', price);
        formData.append('product_file', file);
        formData.append('product_info', info);
        await fetch('http://localhost:8000/api/updateproduct/' + uid + '?_method=PUT', {
            method: 'POST',
            body: formData
        });
        Swal.fire({
            icon: 'success',
            title: 'Product Details Updated',
            showConfirmButton: false,
            timer: 1000
        })
        history.push('../');
    }

    return (
        <>
            <Header /><Logo />
            <div className='col-sm-4 offset-sm-4'>
                <h3>Add Product</h3><p />
                <input type='text' placeholder='Enter Product Name' className='form-control'
                    defaultValue={data.name} onChange={(e) => setName(e.target.value)} /><p />

                <input type='text' placeholder='Enter Product Price' className='form-control'
                    defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} /><p />

                <input type='file' placeholder='Choose an Image' className='form-control'
                    defaultValue={data.filepath} onChange={(e) => setFile(e.target.files[0])} /><p />

                <input type='textarea' placeholder='Product Description' className='form-control'
                    defaultValue={data.description} onChange={(e) => setInfo(e.target.value)} /><p />

                <Button onClick={() => EditById(data.id)}> Update Item </Button>
            </div>
        </>
    )
}
export default withRouter(Update)
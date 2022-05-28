import Header from './Header';
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import SearchProduct from './function';

function Display() {
    const [data, setData] = useState([]);
    useEffect(() => { ViewProduct() }, []);

    async function ViewProduct() {
        let result = await fetch('http://localhost:8000/api/viewproduct');
        result = await result.json();
        setData(result);
    }

    async function DeleteProduct(id) {
        let result = await fetch('http://localhost:8000/api/deleteproduct/' + id, {
            method: 'DELETE',
        });
        result = await result.json();
        setData(result);
        ViewProduct();
    }

    async function SearchProduct(key) {
        let searchResult = await fetch('http://localhost:8000/api/searchresult/' + key);
        searchResult = await searchResult.json();
        setData(searchResult);
    }

    // <SearchProduct />

    return (
        <>
            <Header />
            <div className='col-sm-10 offset-sm-1'>
                <h3 className='customh3'>Product Listing</h3>
                <input type='text' placeholder='Search any Product' className='form-control searchBox'
                    onChange={(e) => SearchProduct(e.target.value)} /><p />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th colSpan='2'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((dbproduct) =>
                                <tr>
                                    <td>{dbproduct.id}</td>
                                    <td><img src={'http://localhost:8000/' + dbproduct.filepath}
                                        style={{ width: 80 }} alt='' />
                                    </td>
                                    <td>{dbproduct.name}</td>
                                    <td>{dbproduct.price}</td>
                                    <td>{dbproduct.description}</td>
                                    <td><Link to={'/update/' + dbproduct.id}>
                                        <Button variant='outline-success'>Update</Button>
                                    </Link>
                                    </td>
                                    <td><Button onClick={() => { DeleteProduct(dbproduct.id) }}
                                        variant='outline-danger'>Delete</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default Display
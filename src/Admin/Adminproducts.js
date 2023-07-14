import React, { useContext } from 'react';
import { myContext } from '../pages/Context';
import './Adminproducts.css';
import Sidebar from './Sidebar';

function Adminproducts() {
  const { products } = useContext(myContext);

  return (
    <div style={{display:'flex',flexDirection:'row'}} className="admin-products-container">
        <Sidebar/>
      <div className="admin-products-table-container">
        <h2>Admin Products</h2>
        <table className="admin-products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>ID</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} className="admin-product-image" />
                </td>
                <td>{product.title}</td>
                <td>{product.id}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminproducts;

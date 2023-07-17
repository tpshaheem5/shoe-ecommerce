import React, { useContext } from 'react';
import { myContext } from '../pages/Context';
import './Adminproducts.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';



function Adminproducts() {
  const { products, setProducts } = useContext(myContext);
  const navigate = useNavigate()

  const handleDeleteProduct = (productId) => {
    const deleteProducts = products.filter((product) => product.id !== productId);
    setProducts(deleteProducts);
    console.log(`Deleting product with ID: ${productId}`);
  };

  // const handleUpdateProduct = (productId) => {
  //   const productToUpdate = products.find((product) => product.id === productId);

  //   // Perform your update product logic here
  //   console.log(`Updating product with ID: ${productId}`);
  //   console.log('Product Details:', productToUpdate);
  // };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }} className="admin-products-container">
      <Sidebar />
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
              <th>Actions</th>
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
                <td>
                  <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  <button className="update-button" onClick={()=>navigate(`/Updateproduct/${product.id}`)}>Update</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminproducts;

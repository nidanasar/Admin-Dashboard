"use client"

import { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  stock: number
  status: string
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Gaming Keyboard", price: 149.99, stock: 50, status: "In Stock" },
    { id: 2, name: "Gaming Mouse", price: 79.99, stock: 30, status: "Low Stock" },
    { id: 3, name: "Gaming Headset", price: 99.99, stock: 20, status: "In Stock" },
    { id: 4, name: "Gaming Chair", price: 249.99, stock: 15, status: "Low Stock" },
    { id: 5, name: "Gaming Monitor", price: 399.99, stock: 10, status: "Out of Stock" },
  ])

  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    const product: Product = {
      id: products.length + 1,
      name: newProduct.name,
      price: Number.parseFloat(newProduct.price),
      stock: Number.parseInt(newProduct.stock),
      status: Number.parseInt(newProduct.stock) > 20 ? "In Stock" : "Low Stock",
    }
    setProducts([...products, product])
    setNewProduct({ name: "", price: "", stock: "" })
  }

  return (
    <div className="products">
      <div className="products-header">
        <h2>Products</h2>
        <form onSubmit={handleAddProduct} className="add-product-form">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            required
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            step="0.01"
            required
          />
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            placeholder="Stock"
            required
          />
          <button type="submit" className="add-btn">
            Add Product
          </button>
        </form>
      </div>
      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock}</td>
                <td>{product.status}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
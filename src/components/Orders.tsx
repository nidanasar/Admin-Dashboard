"use client"

import { useState } from "react"

interface Order {
  id: number
  customerName: string
  date: string
  status: string
  total: number
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, customerName: "John Doe", date: "2023-05-01", status: "Delivered", total: 199.99 },
    { id: 2, customerName: "Jane Smith", date: "2023-05-02", status: "Processing", total: 149.99 },
    { id: 3, customerName: "Bob Johnson", date: "2023-05-03", status: "Shipped", total: 99.99 },
    { id: 4, customerName: "Alice Brown", date: "2023-05-04", status: "Pending", total: 299.99 },
    { id: 5, customerName: "Charlie Wilson", date: "2023-05-05", status: "Delivered", total: 249.99 },
  ])

  const [newOrder, setNewOrder] = useState({ customerName: "", total: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewOrder({ ...newOrder, [name]: value })
  }

  const handleAddOrder = (e: React.FormEvent) => {
    e.preventDefault()
    const order: Order = {
      id: orders.length + 1,
      customerName: newOrder.customerName,
      date: new Date().toISOString().split("T")[0],
      status: "Pending",
      total: Number.parseFloat(newOrder.total),
    }
    setOrders([...orders, order])
    setNewOrder({ customerName: "", total: "" })
  }

  return (
    <div className="orders">
      <div className="orders-header">
        <h2>Orders</h2>
        <form onSubmit={handleAddOrder} className="add-order-form">
          <input
            type="text"
            name="customerName"
            value={newOrder.customerName}
            onChange={handleInputChange}
            placeholder="Customer Name"
            required
          />
          <input
            type="number"
            name="total"
            value={newOrder.total}
            onChange={handleInputChange}
            placeholder="Total"
            step="0.01"
            required
          />
          <button type="submit" className="add-btn">
            Add Order
          </button>
        </form>
      </div>
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>${order.total.toFixed(2)}</td>
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
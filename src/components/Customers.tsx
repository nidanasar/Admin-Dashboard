"use client"

import { useState } from "react"

interface Customer {
  id: number
  name: string
  email: string
  totalOrders: number
  totalSpent: number
}

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: "John Doe", email: "john@example.com", totalOrders: 5, totalSpent: 499.95 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", totalOrders: 3, totalSpent: 299.97 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", totalOrders: 7, totalSpent: 749.93 },
    { id: 4, name: "Alice Brown", email: "alice@example.com", totalOrders: 2, totalSpent: 199.98 },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", totalOrders: 4, totalSpent: 399.96 },
  ])

  const [newCustomer, setNewCustomer] = useState({ name: "", email: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewCustomer({ ...newCustomer, [name]: value })
  }

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault()
    const customer: Customer = {
      id: customers.length + 1,
      name: newCustomer.name,
      email: newCustomer.email,
      totalOrders: 0,
      totalSpent: 0,
    }
    setCustomers([...customers, customer])
    setNewCustomer({ name: "", email: "" })
  }

  return (
    <div className="customers">
      <div className="customers-header">
        <h2>Customers</h2>
        <form onSubmit={handleAddCustomer} className="add-customer-form">
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
            placeholder="Customer Name"
            required
          />
          <input
            type="email"
            name="email"
            value={newCustomer.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <button type="submit" className="add-btn">
            Add Customer
          </button>
        </form>
      </div>
      <div className="customers-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.totalOrders}</td>
                <td>${customer.totalSpent.toFixed(2)}</td>
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
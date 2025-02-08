"use client"

import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Overview from "../components/Overview"
import Products from "../components/Products"
import Customers from "../components/Customers"
import Orders from "../components/Orders"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 1024) // Sidebar remains open on large screens
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform bg-gray-900 p-4 transition-all duration-300 lg:relative lg:translate-x-0 lg:w-64 ${sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"}`}>
        <Sidebar isOpen={sidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"} w-full`}>
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="p-4 flex-1 overflow-y-auto">
          {activeTab === "overview" && <Overview />}
          {activeTab === "products" && <Products />}
          {activeTab === "customers" && <Customers />}
          {activeTab === "orders" && <Orders />}
        </div>
      </div>
    </div>
  )
}
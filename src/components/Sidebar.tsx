"use client"

interface SidebarProps {
  isOpen: boolean
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Sidebar({ isOpen, activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "products", label: "Products", icon: "🛍️" },
    { id: "customers", label: "Customers", icon: "👥" },
    { id: "orders", label: "Orders", icon: "📦" },
  ]

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h1>Admin Dashboard</h1>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
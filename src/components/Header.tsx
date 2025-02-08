"use client"

interface HeaderProps {
  toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-menu">
        <div className="notifications">
          <span className="badge">3</span>
        </div>
        <div className="user-profile">
          <span>Admin User</span>
        </div>
      </div>
    </header>
  )
}
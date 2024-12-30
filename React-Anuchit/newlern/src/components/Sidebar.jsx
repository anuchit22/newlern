import React, { useState } from "react";
import "../Style/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "📂", label: "Projects" },
    { icon: "📊", label: "Reports" },
    { icon: "⚙️", label: "Settings" },
    { icon: "🔒", label: "Logout" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "❌" : "☰"}
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
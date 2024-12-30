import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../Style/Content.css";

const BorrowList = () => {
    const items = [
        { name: "Item 1", imageUrl:  "https://via.placeholder.com/150"},
        { name: "Item 2", imageUrl:  "https://via.placeholder.com/150"},
        { name: "Item 3", imageUrl:  "https://via.placeholder.com/150"},
        { name: "Item 5", imageUrl: "https://via.placeholder.com/150" },
        { name: "Item 6", imageUrl: "https://via.placeholder.com/150" },
        { name: "Item 7", imageUrl: "https://via.placeholder.com/150" },
        { name: "Item 8", imageUrl: "https://via.placeholder.com/150" },
        { name: "Item 9", imageUrl: "https://via.placeholder.com/150" },
        { name: "Item 10", imageUrl: "https://via.placeholder.com/150" }
    ];

    const [selectedItems, setSelectedItems] = useState([]);

    const toggleSelectItem = (itemName) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(itemName)
                ? prevSelectedItems.filter((item) => item !== itemName)
                : [...prevSelectedItems, itemName]
        );
    };

    return (
        
            
        <>
        
        <Sidebar/>
        <div className="borrow-container">
            <Navbar />
            <h1 className="h1" >เลือกของที่ต้องการยืม</h1>
            <div className="borrow-list-container">
                <ul className="borrow-list">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`borrow-item ${selectedItems.includes(item.name) ? 'selected' : ''}`}
                            onClick={() => toggleSelectItem(item.name)}
                        >
                            <div className="item-image">
                                <img src={item.imageUrl} alt={item.name} />
                            </div>
                            <span className="item-name">{item.name}</span>
                            <button className="borrow-btn">ยืม</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
};

export default BorrowList;

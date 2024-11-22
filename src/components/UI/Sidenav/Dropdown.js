import React from "react";
import "./Dropdown.css";
import { HiChevronDown } from "react-icons/hi2";
import MyMenuList from "../../data/myMenuList";
const Dropdown = () => {
  const toggleSubMenu = (e) => {
    e.stopPropagation();

    let submenu = e.target.querySelector("ul");
    if (!submenu) return;

    if (submenu.style.display === "none" || !submenu.style.display) {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  };

  const renderSubMenu = (subMenu) => {
    return (
      <ul className="submenu ">
        {subMenu.map((subItem, index) => (
          <li className="flex gap-2 ">
            {subItem.submenu && <HiChevronDown />}
            <a
              key={index}
              onClick={toggleSubMenu}
              href={subItem.path}
              className="no-underline text-white hover:no-underline hover:text-white"
            >
              {subItem.name}
              <li className="block  ">
                {subItem.submenu && renderSubMenu(subItem.submenu)}
              </li>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <ul>
        {MyMenuList.map((item, index) => (
          <li
            key={index}
            onClick={toggleSubMenu}
            className="text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <a
              href={item.path}
              className="no-underline text-white hover:no-underline hover:text-white"
            >
              {item.name}
            </a>
            {item.submenu && renderSubMenu(item.submenu)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

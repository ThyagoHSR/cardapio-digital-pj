import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./pobre-juan.webp";
import ScrollTopButton from "./ScrollTopButton";


const allCategories = ["Menu Completo", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "Menu Completo") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  
  return (
    <main>

      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Cardápio Digital</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
      <ScrollTopButton />

    </main>
  );
};

export default App;

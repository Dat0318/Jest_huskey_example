import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    // call api
  }, []);

  return (
    <div className="product">
      <div className="product_header">
        <div className="logo"></div>
        <div className="wrap_menu">
          <ul className="menu">
            <li className="menu_item">orders</li>
            <li className="menu_item">oversea</li>
            <li className="menu_item">viet nam</li>
            <li className="menu_item">cambodia</li>
            <li className="menu_item">china</li>
          </ul>
        </div>
      </div>

      <div className="product_body">
        <div className="tabs">
          <div className="tab">sales</div>
          <div className="tab">cheap</div>
          <div className="tab">expansive</div>
        </div>
      </div>

      <div className="list_product">
        {products.map((item, index) => {
          return (
            <div className="product_item" key={index}>
              <div className="product_image">
                <img src={item.src} alt={item.name} />
              </div>
              <div className="product_name">{item.name}</div>
              <div className="product_desc">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;

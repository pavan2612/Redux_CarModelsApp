import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Ferrari",
    imgURL:
      "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
    price: 25,
  },
  {
    id: 2,
    name: "Audi",
    imgURL:
      "https://i.pinimg.com/550x/42/64/14/426414c97264657bebb33d11a0205c04.jpg",
    price: 25,
  },
  {
    id: 3,
    name: "Mercedes",
    imgURL:
      "https://www.topgear.com/sites/default/files/2022/03/McLaren_Artura_art_car_3.jpg",
    price: 25,
  },
  {
    id: 4,
    name: "Lamborghini",
    imgURL:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/AventadorModelImage.jpg&w=350&h=251&q=90&c=1",
    price: 25,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

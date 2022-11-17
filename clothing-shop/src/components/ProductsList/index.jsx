import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import productApis from "../../apis/productApis";
import { STATUS_CODE } from "../../constants";
import ProductItem from "../ProductItem";
import "./styles.scss";

const ProductsList = (props) => {
  // const [isLoadData, setIsLoadData] = useState(true);
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () => {
    const response = await productApis.getAll();

    if (response.status === STATUS_CODE.OK) {
      setProductsList(response.data);
    } else {
      alert("Get list failed");
      console.log(response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = productsList.length;

  return (
    <div className="main">
      <p>
        Total: <span>{totalProducts} products</span>
      </p>
      <div className="products__list">
        {productsList.map((item) => (
          <ProductItem
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

ProductsList.propTypes = {};

export default ProductsList;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";
import InputText from "../common/InputText";
import Button from "../common/Button";
import productApis from "../../apis/productApis";
import { STATUS_CODE } from "../../constants";
import { useNavigate } from "react-router-dom";

const FormCreate = (props) => {
  const defaultValues = {
    id: uuidv4(),
    name: "",
    price: "",
    image: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const [data, setData] = useState([]);
  const [errorValidate, setErrorValidate] = useState(false);
  const [errorDuplicate, setErrorDuplicate] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await productApis.getAll();
    console.log(response);

    if (response.status === STATUS_CODE.OK) {
      setData(response.data);
    } else {
      alert("Get list failed");
      console.log(response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isDuplicate = () => {
    return data.some(function (product) {
      return product.name === formValues.name;
    });
  };

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetForm = () => {
    setFormValues(defaultValues);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    if (isDuplicate()) {
      setErrorDuplicate(true);
      return;
    }

    if (
      formValues.name.length == 0 ||
      formValues.price.length == 0 ||
      formValues.image.length == 0
    ) {
      setErrorValidate(true);
      return;
    }

    const response = await productApis.add(formValues);

    if (response.status === STATUS_CODE.CREATED) {
      console.log(response.status);
      alert("Added product successfully");
      navigate("/products");
    } else {
      alert("Please try again!");
      console.log(response.status);
    }

    setFormValues(defaultValues);
  };

  return (
    <div>
      <h2 className="title">Add New Product</h2>
      <form className="form" onSubmit={handleCreateProduct}>
        <div className="form__item">
          <InputText
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleOnChange}
          />
          {errorValidate && formValues.name.length <= 0 && (
            <p>Name is required</p>
          )}
          {errorDuplicate && <p>Product already exists</p>}
        </div>
        <div className="form__item">
          <InputText
            type="number"
            name="price"
            value={formValues.price}
            onChange={handleOnChange}
          />
          {errorValidate && formValues.price.length <= 0 && (
            <p>Price is required</p>
          )}
        </div>
        <div className="form__item">
          <InputText
            type="text"
            name="image"
            value={formValues.image}
            onChange={handleOnChange}
          />
          {errorValidate && formValues.name.length <= 0 && (
            <p>Image is required</p>
          )}
        </div>
        <div className="form__btn">
          <Button type="submit" title="Save" />
          <Button type="reset" title="Reset" onClick={handleResetForm} />
        </div>
      </form>
    </div>
  );
};

FormCreate.propTypes = {};

export default FormCreate;

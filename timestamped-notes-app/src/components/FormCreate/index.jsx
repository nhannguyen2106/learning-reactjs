import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InputText from "../../components/common/InputText";
import Button from "../common/Button";
import "./styles.scss";
import axiosClient from "../../apis/axiosClient";
import { STATUS_CODE } from "../constants";
import noteApis from "../../apis/noteApis";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import moment from "moment";

const FormCreate = ({ setNoteValues }) => {
  const defaultValues = {
    id: uuidv4(),
    content: "",
    date: "",
  };
  // const [formValues, setFormValues] = useState(defaultValues);
  const {
    register,
    handleSubmit,
    setError,
    required,

    formState: { errors, touchedFields },
  } = useForm({ mode: "all" });
  // { mode: "all", reValidateMode: "onBlur" }

  // const handleChangeField = (e) => {
  // setFormValues({
  //   ...formValues,
  //   [e.target.name]: e.target.value,
  // });
  // if (e.target.name === "date") {
  //   const isPastDate = moment(e.target.value).isBefore(moment());
  //   if (isPastDate) {
  //     setError("date", {
  //       message: "The date must be greater than current date ",
  //     });
  //   }
  // }
  // };

  const onHandleSubmit = async (values, e) => {
    console.log(values);
    // e.preventDefault();
    let response = await noteApis.add(values);

    if (response.status === STATUS_CODE.CREATED) {
      alert("Added note sucessfully!");
      response = await noteApis.getAll("/notes");
      setNoteValues(response.data);
    } else {
      alert("Please try again");
      console.log(response.status);
    }
    e.target.reset();

    // setFormValues(defaultValues);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <InputText
        title="Nội dung"
        name="content"
        type="text"
        // value={formValues.content}
        // onChange={handleChangeField}
        required
        register={register}
        registerOption={{
          required: true,
          minLength: 5,
          maxLength: 80,
        }}
        errors={errors}
        touchedFields={touchedFields}
      />
      <div className="form__item">
        <InputText
          title="Ngày nhắc"
          name="date"
          type="date"
          // value={formValues.date}
          // onChange={handleChangeField}
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          registerOption={{
            // onChange: handleChangeField,
            required: true,
            validate: {
              beforeNow: (value) => {
                return moment(value).isSameOrAfter(
                  moment().format("YYYY-MM-DD")
                );
              },
            },
          }}
        />
        <Button title="Lưu ngày" type="submit" />
      </div>
    </form>
  );
};

FormCreate.propTypes = {};

export default FormCreate;

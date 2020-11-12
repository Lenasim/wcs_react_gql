/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import { Form, Label, Input, Button } from "../styles/form-elements";

function AddWilder(): JSX.Element {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const addNewWilder = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const payload = { name, city };
    try {
      const result = await axios.post(
        "http://localhost:5000/api/wilder/create",
        payload
      );
      console.log(result);
      setError("");
    } catch (err) {
      console.log(err);
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <Form onSubmit={(e) => addNewWilder(e)}>
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {error !== "" && <p>error : {error}</p>}
      <Button>Add</Button>
    </Form>
  );
}

export default AddWilder;

import {
  Button,
  Container,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
const Addproduct = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const handleSubmit = () => {
    const payload = {
      title,
      image,
      price,
    };
    axios.post(`http://localhost:8080/products/create`, payload)
      .then((res) => {});
  };
  return (
    <Container>
      <FormControl
        isRequired
        display="grid"
        gridTemplateColumns={"repeat(1,1fr)"}
      >
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="Enter Title"
          type={"text"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <FormLabel>Image Url</FormLabel>
        <Input
          placeholder="Enter Image Url"
          type={"url"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <FormLabel>Price</FormLabel>
        <Input
          placeholder="Enter Price"
          type={"number"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <Button
          colorScheme="blue"
          disabled={title === "" || image === "" || price === 0}
          _hover={{ color: "white" }}
          onClick={handleSubmit}
        >
          Create Product
        </Button>
      </FormControl>
    </Container>
  );
};

export default Addproduct;

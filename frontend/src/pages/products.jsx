import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, Box, Heading, Image, Container, Button } from "@chakra-ui/react";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const addtocart = (el) => {
    axios.post("http://localhost:8080/cart/create", el);
  };
  return (
    <Container
      gridTemplateColumns={"repeat(4,1fr)"}
      maxW={"80%"}
      gap={"30px"}
      display={"grid"}
    >
      {products.map((el) => {
        return (
          <Box
            key={el._id}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            borderRadius={"5px"}
            padding={"20px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Image
              width={"50%"}
              margin={"auto"}
              height={"50%"}
              src={el.image}
            />
            <Heading marginTop={"10px"} size={"sm "}>
              {el.title}
            </Heading>
            <Text fontWeight={"bold"} marginTop={"20px"}>
              <span>Price:</span>
              <span>$</span>
              <span>{el.price}</span>
            </Text>
            <Button
              colorScheme="blue"
              _hover={{ color: "white" }}
              margin={"20px"}
              marginBottom={"0px"}
              onClick={() => {
                addtocart(el);
              }}
            >
              Add to Cart
            </Button>
          </Box>
        );
      })}
    </Container>
  );
};

export default Products;

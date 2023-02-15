import { Box, Container, Heading, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const getData = () => {
    axios.get("https://odd-rose-leopard-suit.cyclic.app/cart").then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, [products]);
  useEffect(() => {
    let to = 0;
    products.forEach((el) => {
      to += el.price;
    });
    setTotal(to);
  }, [products]);
  const handleDelte = (id) => {
    axios
      .delete(`https://odd-rose-leopard-suit.cyclic.app/cart/delete/${id}`)
      .then((res) => {
        getData();
      });
  };
  return (
    <Container maxW={"80%"} display={"flex"} justifyContent={"space-between"}>
      <Box display={"flex"} flexDir={"column"} gap={"10px"}>
        {products.map((el) => {
          return (
            <Box
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              borderRadius={"5px"}
              padding={"20px"}
              gap={"30px"}
              display={"flex"}
              height={"200px"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-around"}
              key={el._id}
            >
              <Image width={"100px"} src={el.image} />
              <Heading size={"md"}>{el.title}</Heading>
              <Heading size={"sm"}>Price: ${el.price}</Heading>
              <Button
                onClick={() => {
                  handleDelte(el._id);
                }}
              >
                Remove
              </Button>
            </Box>
          );
        })}
      </Box>
      <Box
        width={"400px"}
        textAlign={"left"}
        border={"1px solid gray"}
        padding={"30px"}
        display={"flex"}
        justifyContent={"center"}
        flexDir={"column"}
      >
        <Text fontSize={"30px"}>Cart Total : ${total}</Text>
        <Text fontSize={"30px"}>
          Tax 18% : ${Math.floor((total * 18) / 100)}
        </Text>
        <Text fontSize={"30px"}>
          Total Amount : ${Math.floor(total + (total * 18) / 100)}
        </Text>
        <br />
        <form
          action="https://odd-rose-leopard-suit.cyclic.app/payment"
          method="POST"
        >
          <Button type="submit" colorScheme="blue">
            Proceed to checkout
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Cart;

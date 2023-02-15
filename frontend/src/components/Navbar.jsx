import { Button, Container } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAdmin } = useSelector((state) => state.authreducer);

  return (
    <Container
      zIndex={10}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      marginBottom={"30px"}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      position={"sticky"}
      top={"0px"}
      maxW={"100%"}
      height={"70px"}
      bg={"white"}
    >
      <Link to={"/"}>
        <Button>Home</Button>
      </Link>
      <Link to={"/login"}>
        <Button>login</Button>
      </Link>
      <Link to={"/signup"}>
        <Button>signup</Button>
      </Link>
      <Link to={"/cart"}>
        <Button>Cart</Button>
      </Link>
      {isAdmin ? (
        <Link to={"/admin"}>
          <Button>admin</Button>
        </Link>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Navbar;

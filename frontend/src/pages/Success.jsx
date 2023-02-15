import { Container, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1900);
  });
  return (
    <Container display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Image
        width={"100%"}
        src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"
        alt=""
      />
    </Container>
  );
};

export default Success;

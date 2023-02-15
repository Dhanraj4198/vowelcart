import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Heading,
  Image,
  Container,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAdmin } = useSelector((state) => state.authreducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
    getData();
  }, [products]);
  const getData = () => {
    axios.get("http://localhost:8080/products").then((res) => {
      setProducts(res.data);
    });
  };
  const handleDelte = (id) => {
    axios.delete(`http://localhost:8080/products/delete/${id}`).then((res) => {
      getData();
    });
  };
  const handleEdit = (id) => {
    const payload = {
      title,
      image,
      price: +price,
    };
    axios
      .patch(`http://localhost:8080/products/edit/${id}`, payload)
      .then((res) => {
        getData();
      });
    onClose();
  };
  return (
    <div>
      <Link to={"/addproduct"}>
        <Button>Add Product</Button>
      </Link>
      <br />
      <br />
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
              <Box>
                <Button
                  colorScheme="blue"
                  _hover={{ color: "white" }}
                  margin={"20px"}
                  marginBottom={"0px"}
                  onClick={() => {
                    onOpen();
                    setId(el._id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  colorScheme="blue"
                  _hover={{ color: "white" }}
                  margin={"20px"}
                  marginBottom={"0px"}
                  onClick={() => {
                    handleDelte(el._id);
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          );
        })}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg={"none"} backdropFilter="auto" backdropBlur="3px" />
          <ModalContent>
            <ModalHeader>Edit Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel>Title</FormLabel>
              <Input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="Edit Title"
              />
              <FormLabel>Image</FormLabel>
              <Input
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                type="url"
                placeholder="Edit Image"
              />
              <FormLabel>Price</FormLabel>
              <Input
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                placeholder="Edit Price"
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  handleEdit(id);
                }}
              >
                Edit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </div>
  );
};

export default Admin;

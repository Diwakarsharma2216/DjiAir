import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    IconButton,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import {AiOutlineAlert} from "react-icons/ai"

const CustomAlert = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color="#546E7A">Alert</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text color="blue.500">Please select one option before proceeding.</Text>
                </ModalBody>
                <Button
                    mt={4}
                    mb={4}
                    bgColor={"#fff"}
                    _hover={{ bgColor: "#fff", color: "#000" }}
                    onClick={onClose}
                    alignSelf="center"
                    color="#fff"
                    textColor={"#000"}
                    // bgColor="#79abd2"
                    >
                   <Text _hover={{color: "green.400" }} color="#546E7A">OK</Text> 
                </Button>
            </ModalContent>
        </Modal>
    );
};

export default CustomAlert;

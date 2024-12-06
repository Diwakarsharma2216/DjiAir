import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react';


const Alert = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Alert</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Please select one option before proceeding.</Text>
                </ModalBody>
                <Button mt={4} onClick={onClose} alignSelf="center" colorScheme="blue">
                    OK
                </Button>
            </ModalContent>
        </Modal>
    );
};

export default Alert
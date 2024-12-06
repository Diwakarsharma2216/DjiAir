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
} from '@chakra-ui/react';

const AdminAlert = ({ isOpen, onClose, alert_msg}) => {
    {

        return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Alert</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                       
                            <Text>{alert_msg}</Text>
                      
                    </ModalBody>
                </ModalContent>
            </Modal>
        )
    }
};

export default AdminAlert;

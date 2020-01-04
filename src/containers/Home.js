import React, { useState } from 'react';
import TablePage from '../components/TablePage'
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import FormAdd from '../components/FormAdd'
import HeaderTable from '../components/HeaderTable'
const Home = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Container>

                    <Button className="float-right" onClick={toggle} color="success">Add</Button>

                    <TablePage />
                    <Modal isOpen={modal} fade={false} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <FormAdd toggle={toggle} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </Container>
        </div>
            )
        
        }
        
export default Home
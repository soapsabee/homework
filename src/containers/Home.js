import React, { useState } from 'react';
import TablePage from '../components/TablePage'
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import FormAdd from '../components/FormAdd'
import HeaderTable from '../components/HeaderTable'
const Home = () => {

    const [modal, setModal] = useState(false);
    const [typeForm, setTypeForm] = useState("addForm")
    const toggle = () => setModal(!modal);
    const toggleEdit = () => {
        setTypeForm("editForm")
        toggle()
    }

    const toggleAdd = () => {
        setTypeForm("addForm")
        toggle()
    }


    return (
        <div>
            <Container>

                    <Button className="float-right" onClick={toggleAdd} color="success">Add</Button>

                    <TablePage toggleModal={toggleEdit}/>
                    <Modal isOpen={modal} fade={false} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                        <ModalBody>
                         {typeForm == 'addForm' ? <FormAdd toggle={toggle} /> : <div>FormEdit</div>}
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
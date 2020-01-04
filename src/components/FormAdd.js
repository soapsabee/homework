import React , { useState , useEffect }from 'react';
import { Form , FormGroup, Label ,Input, Button } from 'reactstrap'
import { addUsers } from '../actions'
import { useSelector, useDispatch } from 'react-redux';



const FormAdd = (props) => {

    const dispatch = useDispatch();
    let inputRef = React.createRef();

    // const users = useSelector(state => state.users);
  
    const handleSubmit = (e) => {
        e.preventDefault();
       console.log("handleSubmit : " +inputRef.value
       );
       
       let data = {
         first_name : inputRef.value
       }

       addUser(data)
    }

    const addUser = (data) => {  
        dispatch(addUsers(data))
        props.toggle()
    }



      
  
    return(
        <Form  onSubmit={handleSubmit}>
        <FormGroup>
        <Label for="Name" hidden>FirstName</Label>
          <Input className="input "type="text" name="fname" id="exampleEmail" placeholder="First Name" innerRef={input => inputRef = input} />
          
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    )
}

export default FormAdd
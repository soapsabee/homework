import React , { useState , useEffect }from 'react';
import { Form , FormGroup, Label ,Input, Button } from 'reactstrap'
import { addUsers } from '../actions'
import { useSelector, useDispatch } from 'react-redux';



const FormAdd = () => {

    const dispatch = useDispatch();

    // const users = useSelector(state => state.users);
  

    const [fname, setFname] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
       
        setFname(e.target.value)
        
    console.log("handleSubmit : " +e.target.value);
    
    }

    const addUser = () => {
        console.log("handelSubmit");
        console.log("addUser: "+ fname);
        
        // dispatch(addUsers(fname))
    }



      
  
    return(
        <Form  onSubmit={handleSubmit}>
        <FormGroup>
        <Label for="Name" hidden>FirstName</Label>
          <Input type="text" name="fname" id="exampleEmail" placeholder="First Name" onChange={handleSubmit} value={fname} />
          
        </FormGroup>

        <Button onClick={addUser()}>Submit</Button>
      </Form>
    )
}

export default FormAdd
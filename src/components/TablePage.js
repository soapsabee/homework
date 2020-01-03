import React,{ useEffect } from 'react';
import { Table } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { usersFetch } from '../actions'


const TablePage = () => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.users);


  const listUser = users.map((user) => {
        
    return  <tr><td key={user.id}>{user.first_name}</td>  </tr>
         
 
})


  useEffect(() => {
    dispatch(usersFetch())
}, [])

    return(
        <Table>
      <thead>
        <tr>
          <th>First Name</th>

        </tr>
      </thead>
      <tbody>
      {listUser}
   
      </tbody>
    </Table>
    )

}

export default TablePage
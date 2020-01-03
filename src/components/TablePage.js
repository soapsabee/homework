import React, { useEffect } from 'react';
import { Table } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { usersFetch, deleteUser } from '../actions'


const TablePage = () => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.users);

  const onClickDeleteUser = (id) => {
    
    dispatch(deleteUser(id))
  }

  const listUser = users.map((user) => {

    return <tr key={user.id}>
      <td key={user.id}>{user.first_name}  <button color="danger" onClick={() => onClickDeleteUser(user.id)}>Delete</button></td> 
     </tr>
  })


  useEffect(() => {
    dispatch(usersFetch())
  }, [])

  return (
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
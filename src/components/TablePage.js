import React, { useEffect , useState } from 'react';
import { Table } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { usersFetch, deleteUser } from '../actions'


const TablePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const users = useSelector(state => state.users);

  const onClickDeleteUser = (id) => {
    
    dispatch(deleteUser(id))
  }

  const handleSearch = (e) =>{
      let searchvalue = e.target.value
      const results = users.filter(user =>
          user.first_name.toLowerCase().includes(searchvalue.toLowerCase())
        )
        setSearchResults(results)
        console.log("searchResult : " +searchResults);
        
      
  }

  const listUser = users.map((user) => {

    return <tr key={user.id}>
      <td key={user.id}>{user.first_name}  <button color="danger" onClick={() => onClickDeleteUser(user.id)}>Delete</button></td> 
     </tr>
  })

  const listUserSearch = searchResults.map((user) => {

    return <tr key={user.id}>
      <td key={user.id}>{user.first_name}  <button color="danger" onClick={() => onClickDeleteUser(user.id)}>Delete</button></td> 
     </tr>
  })


  useEffect(() => {
    dispatch(usersFetch())
    
  }, [])

  return (
    <div>
    <form class="form-inline float-center">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <Table>
      <thead>
        <tr>
          <th>First Name</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.length > 0 ? listUserSearch : listUser }
      </tbody>
    </Table>
    </div>
  )

}

export default TablePage
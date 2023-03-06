import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams, Link} from "react-router-dom";

function ViewUser() {
   
  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: "", 
    username: "", 
    email: ""
  })
  
  const {id} = useParams()

  useEffect(() => {
    loadUser(); 

}, [])

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
     
} 

  return (
    <div className='container'>
         <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Details</h2>

                <div className='card'>
                        <ul className='list-group list-group-flush p-3 m-3'>
                            <li className='list-group-item'>
                                <b>Name: {user.name}</b>
                            </li>
                            <li className='list-group-item'>
                                <b>Username: {user.username}</b>
                            </li>
                            <li className='list-group-item'>
                                <b>Email: {user.email}</b>
                            </li>
                        </ul> 

                        <div className='text-center'>
                        <Link type='submit' className='btn btn-outline-danger m-2' to="/">Cancel</Link>
                        </div>
                    
                </div>
            </div>
         </div>
    </div>
  )
}

export default ViewUser
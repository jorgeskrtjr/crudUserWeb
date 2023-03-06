import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";

function EditUser() {
    
    let navigate = useNavigate()

    const {id} = useParams()

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    
    useEffect(() => {
        loadUser(); 

    }, [])

    const { name, username, email } = user

    const onSubmit = async (e) => {
        e.preventDefault(); 
         await axios.put(`http://localhost:8080/user/${id}`, user);
         navigate("/") 
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
         
    } 

    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Username' className='form-label'>
                                Username
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your username' name='username' value={username} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                Name
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your Name' name='name' value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                E-mail
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your e-mail address' name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='text-center'>
                            <button type='submit' className='btn btn-outline-success m-2' >Submit</button>
                            <button type='submit' className='btn btn-outline-danger m-2' >Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser
import axios from 'axios'
import React, {useState} from 'react'
import {Link, useNavigate } from "react-router-dom";

function AddUser() {
    
    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const { name, username, email } = user

    const onSubmit = async (e) => {
        e.preventDefault(); 
         await axios.post("http://localhost:8080/user", user);
         navigate("/") 
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
                            <Link type='submit' className='btn btn-outline-danger m-2' to="/">Cancel</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser
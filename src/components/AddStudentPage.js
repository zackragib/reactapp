import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, FormGroup } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { createStudent } from '../actions/studentAction'
import { STUDENT_CREATE_RESET } from '../constants/studentConstants'



function AddStudentPage({history}) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const dispatch = useDispatch()

    const studentCreate = useSelector((state) => state.studentCreate)
    const { success, error, loading } = studentCreate

    useEffect(() => {
        if (success) {
            dispatch({type: STUDENT_CREATE_RESET})
            history.push('/')
        }

    },[success])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createStudent({name: name, age: age}))
        
    }
    return (
        <div>
            <FormContainer>
                <h1>Add Student</h1>
                {loading && <Loader />}
                {error && <Message variant='danger'>{error}</Message>}
                    <Form onSubmit={submitHandler}>
                        <FormGroup controlId='name' className='py-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        type='name'
                        required
                        placeholder = 'Student Name'
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                         >

                        </Form.Control>
                        </FormGroup>
                        <FormGroup controlId='age'>
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                        type='text'
                        required
                        placeholder = 'Student Age'
                        value = {age}
                        onChange = {(e) => setAge(e.target.value)}
                         >

                        </Form.Control>
                        </FormGroup>

                        <Button className='my-3' type='submit' variant='info'>Save</Button>
                    </Form>
                
                </FormContainer>
        </div>
    )
}

export default AddStudentPage

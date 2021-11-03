import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStudentDetail, updateStudent } from '../actions/studentAction'
import { Form, Button, FormGroup } from 'react-bootstrap'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { STUDENT_UPDATE_RESET } from '../constants/studentConstants'


function StudentDetailPage({ match , history}) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
   
    const studentId = match.params.id
    const studentDetail = useSelector((state) => state.studentDetail)
    const { student, loading } = studentDetail

    const studentUpdate= useSelector((state) => state.studentUpdate)
    const { success: updateSuccess, loading:updateLoading } = studentUpdate

    const dispatch = useDispatch();
    useEffect(() => {
        if (updateSuccess) {
            dispatch({ type: STUDENT_UPDATE_RESET })
            history.push('/')
           
        } else {
            if (!student || student.id !== Number(studentId)) {
                dispatch(getStudentDetail(studentId))
            } else {
                setName(student.name)
                setAge(student.age)
            }
        }
        
       
     
    }, [dispatch, studentId, student, updateSuccess])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateStudent({id: student.id, name : name, age: age}))
       
    }
    return (
        <div>
            {updateLoading && <Loader/>}
            {student ? (
                <FormContainer>
                    <h2>Student ID: { student.id }</h2>
                    <Form onSubmit={submitHandler}>
                        <FormGroup controlId='name' className='py-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        type='name'
                        required
                        placeholder = 'Your Name'
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
                        placeholder = 'Your Age'
                        value = {age}
                        onChange = {(e) => setAge(e.target.value)}
                         >

                        </Form.Control>
                        </FormGroup>

                        <Button className='my-3' type='submit' variant='info'>Save</Button>
                    </Form>
                
                </FormContainer>
                
            
            ) : loading && <Loader/> 
            }
            
        </div>
    )
}

export default StudentDetailPage

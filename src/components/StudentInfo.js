import React, {useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { deleteStudent } from '../actions/studentAction'
import { STUDENT_DELETE_RESET } from '../constants/studentConstants'
import  Loader from '../components/Loader'


function StudentInfo({ student }) {
    const disptach = useDispatch()
    
    const deleteHandler = (id) =>{
        console.log(`ClickWorking  ${id}`)
        disptach(deleteStudent(id))
    }
    return (

        <div>
            <Card className="my-3 p-3 rounded">
                <Card.Body className='redCol'>
                    <Card.Title >Student ID: { student.id}</Card.Title>
                    <Card.Title className='redCol'>{ student.name}</Card.Title>
                    <Card.Text>Age = {student.age}</Card.Text>
                    <LinkContainer to={`/student/${student.id}`}>
                    <Button variant="primary">View Details</Button>
                    </LinkContainer>
                    <Button onClick={()=>{deleteHandler(student.id)}} className='float-end' variant="danger"><i class="fas fa-times"></i></Button>
           </Card.Body>
        </Card>
        </div>
    )
}

export default StudentInfo

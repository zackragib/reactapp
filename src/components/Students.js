import React , {useEffect} from 'react'
import StudentInfo from '../components/StudentInfo'
import { useSelector, useDispatch } from 'react-redux'
import { getStudentList } from '../actions/studentAction'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Col, Row } from 'react-bootstrap'

function Students({history}) {

    const studentList = useSelector((state) => state.studentList)
    const { students, error, loading } = studentList
    const studentDelete = useSelector((state) => state.studentDelete)
    const { success, loading: deleteLoading } = studentDelete
    let keywor = history.location.search

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudentList(keywor))
        
        
    }, [dispatch, success, keywor])

    return (
        <div>
            <h2>Student page</h2>
            {deleteLoading && <Loader/>}
            {loading ? <Loader />
                : error ? <Message variant='danger' >{error}</Message>
                    :
                    <div className= 'container'>
                        {students.map(student => (
                            <Row key={student.id}  >
                                <StudentInfo student={ student }/>
                            </Row>
                    
                        ))}
                   
                    </div>
            }
        </div>
    )
}

export default Students

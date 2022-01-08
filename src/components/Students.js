import React , {useEffect, useRef, useCallback, useState} from 'react'
import StudentInfo from '../components/StudentInfo'
import { useSelector, useDispatch } from 'react-redux'
import { getStudentList } from '../actions/studentAction'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Row,Button, Col } from 'react-bootstrap'
import {useReactToPrint} from 'react-to-print';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import { GET_STUDENT_SUCCESS, GET_MORE_STUDENT_SUCCESS } from '../constants/studentConstants'


function Students({history}) {

    const studentList = useSelector((state) => state.studentList)
    let { students, error, loading } = studentList
    const studentDelete = useSelector((state) => state.studentDelete)
    const { success, loading: deleteLoading } = studentDelete
    let keywor = history.location.search
    const [page, setPage] = useState(1)
    
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudentList(keywor))
        
        
    }, [dispatch, success, keywor])
    const observer = useRef();
    
    // const handlePrint = useReactToPrint({
    //     content: () => observer.current,
    // })
    const loadData = async () => {
        setPage(Number(page+1))
        const data = [{ 'id': 1, 'name': 'zack' }]
        students = [...students, ...data]
       console.log(students, page)
    }
    

    const lastItemElementRef = useCallback(ns => {
       
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log('Last Item touch')
                loadData()
             }
        })
        if(ns) observer.current.observe(ns)
    }, [loading])


    return (
        <div>
            <h2>Student page</h2>
            <Row>
             <Col md={4}>
            {/* <Button variant='primary' onClick={handlePrint}>Print</Button> */}
                </Col>
                <Col md={4}>
                    <LinkContainer to='/infinite'>
            <Button variant='secondary'>Infinite Test</Button>
            </LinkContainer>
                </Col>
            <Col md={4}>  
            <Link to='/chart'>
                <Button variant='success'>
                    Another Component
                </Button>
            </Link>
            </Col>  
            </Row>
            {deleteLoading && <Loader/>}
           
        </div>
    )
}

export default Students

import React, { useState, useEffect }from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux'
import * as XLSX from 'xlsx'
import Message from '../components/Message'
import { createStudent } from '../actions/studentAction'
import { STUDENT_CREATE_RESET } from '../constants/studentConstants'
import Loader from '../components/Loader'

function ExcelUpload({history}) {

  const [excelFile, setExcelFile] = useState(null)
  const [excelData, setExcelData] = useState(null)
  const [fileError, setFileError] = useState(null)
  
  const dispatch = useDispatch()
    const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    
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
        if (excelFile !== null) {
          setFileError(null)
          const workbook = XLSX.read(excelFile, { type: 'buffer' })
          const worksheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[worksheetName]
          const data = XLSX.utils.sheet_to_json(worksheet)
          setExcelData(data)
          
         
          
        } else {
          setFileError('File not selected')
        }
  
    }
    
   
      const uploadFileHandler = (e) => {
        let file = e.target.files[0]
        if (file) {
          if (fileType.includes(file.type)) {
            console.log('ok excel file')
            let reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onload = (e) => {
              setFileError(null)
              setExcelFile(e.target.result)
              
            }
          } else {
            setFileError('Please select valid excel file')
           
          }
        } else {
          setFileError('You must select some file')
          console.log('select some file')
        }
    }
    
    const dataUploadHandler = () => {
      if (excelData !== null) {
          for (var i = 0; i < excelData.length; i++) {
        dispatch(createStudent({name: excelData[i].name, age: excelData[i].age}))
    
        }
        }
    }

    return (
        <div>
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file"
              onChange={uploadFileHandler }/>
          </Form.Group>
          
          <Button type='Submit' variant='primary' className='btn btn-sm'>View Data</Button>
        </Form>
        <hr />
        {fileError !== null && <Message variant='danger'>{fileError}</Message>}
        {excelFile === null ? <Message variant='info'>Select File</Message> : 
          ( <div>
            <Table striped bordered hover responsive size='sm'>
        
                    <thead>
                    <tr>
                       <th>ID</th> 
                       <th>Name</th> 
                       <th>Age</th> 
                       
                    </tr>
                    </thead>
                    <tbody>
        {excelData !== null && excelData.map(emp => {
          return <tr key={emp.id}>
            <td>{ emp.id }</td>
            <td>{emp.name}</td>
            <td>{ emp.age }</td>
            </tr>
          })}
          </tbody>
            </Table>
            <Button onClick={dataUploadHandler} variant='danger' className='btn btn-sm' disabled={excelData === null}>Upload it</Button>
            </div>
        )
        }
        
        </div>
    )
}

export default ExcelUpload

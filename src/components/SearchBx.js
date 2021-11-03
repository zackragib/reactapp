import React, {useState} from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBx() {
    const [key, setKey] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (key) {
            history.push(`/?key=${key}`)
            
        } else {
            history.push(history.location.pathname)
        }
        
    } 
    return (
        <Form onSubmit={submitHandler}>
            <Form.Control size="sm" value={ key } type="text" placeholder="Search" onChange={ (e) => setKey(e.target.value) }/>
        </Form>
    )
}

export default SearchBx

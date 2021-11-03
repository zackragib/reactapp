import React from 'react'
import './bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap' 
import Students from './components/Students'
import Header from './components/Header'
import StudentDetailPage from './components/StudentDetailPage'
import AddStudentPage from './components/AddStudentPage'

function App() {
  return (
    <Router >
      <Header />
      <main>
      <Container >
        <Route path='/' component={Students} exact />
        <Route path='/student/:id' component={StudentDetailPage} exact />
        <Route path='/add' component={ AddStudentPage} exact/>
      </Container>
      </main>
    </Router>
  )
}

export default App

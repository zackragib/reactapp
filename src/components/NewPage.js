import React from 'react'
import { Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ProfileNav from '../components/ProfileNav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GeneralInfoPage from '../components/GeneralInfoPage'
import SalaryPage from '../components/SalaryPage'

function NewPage() {
    return (
        <Router >
        <ProfileNav />
      <Container >
          <Route path='/newpage/general' component={GeneralInfoPage} />
          <Route path = '/newpage/salary' component={SalaryPage}/>
      </Container>
      
    </Router>
    )
}

export default NewPage

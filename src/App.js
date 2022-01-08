import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap' 
import Students from './components/Students'
import Header from './components/Header'
import StudentDetailPage from './components/StudentDetailPage'
import AddStudentPage from './components/AddStudentPage'
import Print from './components/Print'
import NewPage from './components/NewPage'
import GeneralInfoPage from './components/GeneralInfoPage'
import SalaryPage from './components/SalaryPage'
import InfinitePage from './components/InfinitePage'
import Func from './components/Func'
import ExcelUpload from './components/ExcelUpload'
import ChartComponent from './components/ChartComponent'
import ExampleSlider from './components/ExampleSlider'

function App() {
  return (
    <Router >
      <Header />
      <main>
      <Container >
        <Route path='/' component={Students} exact />
        <Route path='/student/:id' component={StudentDetailPage} exact />
          <Route path='/add' component={AddStudentPage} exact />
          <Route path='/print' component={Print} />
          <Route path='/newpage/general' component={NewPage} />
          <Route path='/infinite' component={Func} />
          <Route path='/photos' component={InfinitePage} />
          <Route path='/upload' component={ExcelUpload} />
          <Route path='/chart' component={ChartComponent} />
          <Route path='/slider' component={ExampleSlider} />
         
      </Container>
      </main>
    </Router>
  )
}

export default App

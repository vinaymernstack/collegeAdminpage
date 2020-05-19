import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './login/login'

import Addcoursepage from './addcoursepage/addcoursepage'
import Sidenav from './sidenav/sidenav'
import Student from './students/students'
import Marks from './marks/marks'
import Subjects from './subjects/subjects'
import Semister from './semister/semister'
import Addsemister from './addsemister/addsemister'
import Addmarks from './addmarks/addmarks'
import Addstudent from './addstudents/addstudents'
import Addsubjects from './addsubjects/addsubjects'
import Course from './courses/courses'
import Reports from './reports/reports'
import Register from './register/register'
import Sidenavtpo from './sidenavtpo/sidenavtpo'
import Tporeports from './tporeports/tporeports'
import Totalrepoerts from './totalreports/totalreports'
import Sidenavstudent from './sidenavstudent/sidenavstudent'
import Studentreport from './studentreport/studentreport'
import {connect} from "react-redux"
import {GuardProvider,GuardedRoute} from "react-router-guards"


function App() {
  
  return (
    <div >
      <BrowserRouter>
        <GuardProvider>
        <GuardedRoute path='/' exact  component={Login}/>
        <GuardedRoute path='/adminpage' exact component={Sidenav}/>
        <GuardedRoute path='/course' component={Course}/>
        <GuardedRoute path='/addcourse' component={Addcoursepage}/>
        <GuardedRoute path='/students' component={Student}/>
        <GuardedRoute path='/addstudents' component={Addstudent}/>
        <GuardedRoute path='/marks' component={Marks}/>
        <GuardedRoute path='/subjects' component={Subjects}/>
        <GuardedRoute path='/Semister' component={Semister}/>
        <GuardedRoute path='/addsemister' component={Addsemister}/>
        <GuardedRoute path='/Addmarks' component={Addmarks}/>
        <GuardedRoute path='/Addsubjects' component={Addsubjects}/>
        <GuardedRoute path='/reports' component={Reports}/>
        <GuardedRoute path='/register' component={Register}/>
        <GuardedRoute path='/sidenavtpo' component={Sidenavtpo}/>
        <GuardedRoute path='/tporeports' component={Tporeports}/>
        <GuardedRoute path='/totalrepoerts' component={Totalrepoerts}/>
        <GuardedRoute path='/sidenavstudent' component={Sidenavstudent}/>
        <GuardedRoute path='/studentreport' component={Studentreport}/>
        </GuardProvider>
      
      </BrowserRouter>
    </div>
  );
}

let mapStateToProps = state =>{
  return{
    loginperm: state.loginpermission
  }
}
export default connect(mapStateToProps)(App);

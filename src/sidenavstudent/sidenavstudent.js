import React    from "react";

import Footer from '../footer/footer'
import {Link} from "react-router-dom"
import {connect}  from 'react-redux'

class sidenav extends React.Component {

    componentDidMount(){
        var student = localStorage.getItem("student");
        if(student != null){
            window.location.replace("/")
        }
    }
   
  render() {
    return(
        <div className="sidenav">
        <div id="wrapper">

            
            
            <div class="navbar-custom">
                <ul class="list-unstyled topnav-menu float-right mb-0">
                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="assets/img/admin.png" alt="user-image" class="rounded-circle"/>
                            <span class="d-none d-sm-inline-block ml-1 font-weight-medium">
                          <p>Welcome student@gmail.com; </p></span>
                            <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                           
                            <div class="dropdown-header noti-title">
                                <h6 class="text-overflow text-white m-0">Welcome !</h6>
                            </div>

                         
                            <a href="profile.php" class="dropdown-item notify-item">
                                <i class="mdi mdi-account-outline"></i>
                                <span>Profile</span>
                            </a>

                         
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="mdi mdi-settings-outline"></i>
                                <span>Settings</span>
                            </a>

                          
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="mdi mdi-lock-outline"></i>
                                <span>Lock Screen</span>
                            </a>

                            <div class="dropdown-divider"></div>

                           
                            <a href="" class="dropdown-item notify-item">
                                <i class="mdi mdi-logout-variant"></i>
                               <Link to="/"> <span>Logout</span></Link>
                            </a>

                        </div>
                    </li>


                    
                </ul>

               
                <div class="logo-box">
                    <a href="" class="logo text-center logo-dark">
                        <span class="logo-lg">
                           <img src="./img/logo.png" alt="" height="60"/> 
                            <span class="logo-lg-text-dark">STUDENT</span>
                        </span>
                        <span class="logo-sm">
                            <span class="logo-lg-text-dark">SD</span>
                            <img src="./assets/images/logo-sm.png" alt="" height="24"/> 
                        </span>
                    </a>

                    <a href="index.php" class="logo text-center logo-light">
                        <span class="logo-lg">
                            <img src="./assets/images/logo-light.png" alt="" height="22"/>
                            <span class="logo-lg-text-dark">Uplon</span>
                        </span>
                        <span class="logo-sm">
                            <span class="logo-lg-text-dark">U</span> 
                            <img src="./assets/images/logo-sm-light.png" alt="" height="24"/>
                        </span>
                    </a>
                </div>

                <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button class="button-menu-mobile waves-effect waves-light">
                            <i class="mdi mdi-menu"></i>
                        </button>
                    </li>
        

                </ul>
            </div>
            
<div class="left-side-menu">

                <div class="slimscroll-menu">

                   
                    <div id="sidebar-menu">

                        <ul class="metismenu" id="side-menu">

                            <li class="menu-title">Navigation</li>

                           
                           
                            <li>
                                <Link to="/studentreport">
                                    <i class="fa fa-globe"></i>
                                    <span>Reports</span>    
                                </Link>
                            </li>
                           
                            
                            
                           
                        </ul>

                    </div>
                

                    <div class="clearfix"></div>

                </div>
               
            </div>
    </div>
   <Footer/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
    return{
      studentlogindata : (value)=> dispatch({type:"studentlogin",value:value})
    }
  }
const mapStateToProps = state =>{
    return{
      loginregdata : state.studentlodindata
    }
  }

export default  connect(mapStateToProps,mapDispatchToProps)(sidenav);

import React    from "react";
import template from "./login.jsx";
import {Link, Redirect} from "react-router-dom"
import $ from "jquery"
import {connect} from 'react-redux'
class login extends React.Component {
 
  state = {
    loginpermission : [],
    role:"",
    link:"",
    logindata:[]
  }

  componentDidMount(){
     // localStorage.removeItem("student");
    // localStorage.removeItem("admin");
    // localStorage.removeItem("tpo");

    var admin = localStorage.getItem("admin");
    var tpo = localStorage.getItem("tpo");
    var student = localStorage.getItem("student");

    // alert(admin)

    if(admin != "admin" || tpo != "TPO" || student == null){
  
    }else if(admin == "admin"){
      this.props.history.push("/adminpage")
    }else if(tpo == "TPO"){
      this.props.history.push("/sidenavtpo")
    }else if(student != null){
      this.props.history.push("/sidenavstudent")
    }
  }

  submitdata=(props)=>{
    
    let self = this
   
    let studentdata = {
      option : "studentlogin",
      username : $("#Email").val(),
      password : $("#Password").val()

    }
    if($(".semcode").val() == "student"){
      $.ajax({
        type: 'POST',
        url: "http://192.168.0.14/college/api/index.php",
        data: studentdata,
        success: function(res) {
          if(res.length > 0){
            self.setState({
              logindata:res
            })
         
            localStorage.setItem("student", res[0].regno);
            this.props.history.push("/sidenavstudent"); 
            // console.log(self.state.logindata,"data")
           
          }else {
            alert("Password/Username Error !!, Please Try Again")
          }
        
         },
         error: function(res) { alert("Wrong Password , Please Try Again!!");
  }
  });
    }else {
      let logindata = {
        option : "login",
        username : $("#Email").val(),
        password : $("#Password").val(),
        role : $(".semcode").val()
      }
      $.ajax({
        type: 'POST',
        url: "http://192.168.0.14/college/api/index.php",
        data: logindata,
        success: function(res) {
          if(res.length > 0){
              if(res[0].username =="admin@gmail.com"){
            // self.setState({
            // link:"./adminpage"
            // })  
            localStorage.setItem("admin", res[0].role);   
            this.props.history.push("/adminpage")  
           
          }else if(res[0].username == "tpo@gmail.com") {
            this.props.history.push("/sidenavtpo");
            localStorage.setItem("tpo", res[0].role);   
          }else {
            alert("Password/Username Error !!, Please Try Again")
          }
          }
         },
         error: function(res) { alert("Wrong Password , Please Try Again!!");
  }
  });
    }
    
}

student=(e)=>{
  
  this.setState({
    role:e.target.value,
  })
  if(e.target.value==="student"){
   
    $(".register").show()
  }else{
    $(".register").hide()
  }
}

register=()=>{
  this.props.history.push("/register"); 
}
  render() {
    return (
      <div class="account-pages pt-5 my-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="account-card-box">
                            <div class="card mb-0">
                                <div class="card-body p-4">
                                    
                                    <div class="text-center">
                                        <div class="my-3">
                                            <a href="index.html">
                                                {/* <span><img src="assets/images/logo.png" alt="" height="28"/></span> */}
                                            </a>
                                        </div>
                                        <h5 class="text-muted text-uppercase py-3 font-16">Sign In</h5>
                                    </div>
    
                                     
    
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="text" id="Email" name="Email" required="" placeholder="Enter your username"/>
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="password" required="" name="Password" id="Password" placeholder="Enter your password"/>
                                        </div>
    
                                        <div class="form-group">
                        
                          <select name="year" class="form-control semcode" onChange={this.student.bind(this)}>
                            <option value="0">Select Role</option>
                            <option value="admin">admin</option>
                            <option value="student">student</option>
                            <option value="TPO">TPO</option>
                           
                          </select>
                         
                        </div>
    
                                        <div class="form-group text-center" onClick={this.submitdata} >
                                        <button class="btn btn-success btn-block waves-effect waves-light"  name="login" id="login" > Log In </button>
                                        </div>

                                        <div class="form-group text-center register">
                           <button class="btn btn-primary btn-block waves-effect waves-light"  name="login" id="login" onClick={this.register}> Register </button>
                        </div>

                                        <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Forgot your password?</a>
                                </div> 
                            </div>                      
                        </div>               
                    </div> 
                </div>
             
            </div>
            
        </div>
    )
  }
}


export default login;

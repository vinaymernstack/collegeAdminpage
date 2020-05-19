import React    from "react";
import template from "./register.jsx";
import { Link } from "react-router-dom";
import $ from 'jquery'

class register extends React.Component {

    componentDidMount(){
        let ldata = {
            option : "getcourses",
          }
         
          $.ajax({
            type: 'POST',
            url: "http://192.168.0.14/college/api/index.php",
            data: ldata,
            success: function(res) {
              if(res.length > 0){
                console.log(res)
               for (var i = 0; i < res.length; i++){
                 $(".coursename").append(
                   '<option value="'+res[i].cid+'">"'+res[i].cname+'"</option>'
                 )
               }
            }
            },
            error: function(res) { alert("data error");
           }
        })  
    }

    sendstudentssdata=()=>{
        let studentdata = {
          option : "insertStudent",
          regno : $(".regno").val(),
          name : $(".name").val(),
          cid : $(".coursename").val(),
          username : $(".username").val(),
          password : $(".password").val(),
        }
        console.log(studentdata,"dsads")
       if($(".regno").val() == "" || $(".name").val() == ""|| $(".username").val() == ""|| $(".password").val() == "" ){
         alert("please enter values")
       }else {
        $.ajax({
          type: 'POST',
          url: "http://192.168.0.14/college/api/index.php",
          data: studentdata,
          success: function(res) {
            if(res.length > 0){
              alert("Data Submitted successfully");
              // $(".semcode").val("");
              window.location.replace("/sidenavstudent"); 
              // $(".coursecode").val("");
            }else {
              alert("try again")
            }
           },
           error: function(res) { console.log("error");}
      })
      }
    }

  render() {
    return (
      <div className="">
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
                                                <span><img src="assets/images/logo.png" alt="" height="28"/></span>
                                            </a>
                                        </div>
                                        <h5 class="text-muted text-uppercase py-3 font-16">Sign up</h5>
                                    </div>
    
                                 
                                        <div class="form-group mb-3">
                                            <input class="form-control regno" type="email" name="Email" required="" placeholder="Enter your Registration Number"/>
                                        </div>

                                        <div class="form-group mb-3">
                                            <input class="form-control name" type="text" name="Designation" required="" placeholder="Enter your Name"/>
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <input class="form-control username" type="text" name="Username" required="" placeholder="Enter your username"/>
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <input class="form-control password" type="password"  name="Password" required="" id="password" placeholder="Enter your password"/>
                                        </div>
                                      

                                                        <div class="form-group ">
                                        <label for="email">Course Name : </label>
                                        <select name="year" class="form-control validation coursename">
                                        <option value="0">Course name</option>

                                        </select>
                                        </div>
    
                                        
    
                                        <div class="form-group text-center">
                                         <button class="btn btn-success btn-block waves-effect waves-light" type="submit" onClick={this.sendstudentssdata}> Join Now </button>
                                        </div>
    
                                    

                                    <div class="text-center mt-4">
                                        

                                        <div class="row">
                                            <div class="col-12">
                                              
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                           
                        </div>

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-white-50">Already have account? <a href="pages-login.html" class="text-white ml-1"><b>Sign In</b></a></p>
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

export default register;

import "./addstudents.css";
import React from "react";
import Sidenav from '../sidenav/sidenav'
import { Link } from "react-router-dom";
import Footer from '../footer/footer'
function template() {
  return (
    <div className="addstudents">
      <Sidenav/>
      <div class="content-page">
    <div class="content">
      <div class="container">
          <div class="row">
              <div class="col-md-12 mt-3">
                  <h2 class="text-center">Add Student</h2>
              </div>
              <div class="col-md-12">
                  <p>Back To Student List <Link to="/students" href="students.php" class="btn btn-primary btn-rounded"><i class="fa fa-arrow-left"></i></Link></p>
              </div>
              <div class="col-md-6 col-lg-6 offset-md-3">

                         <div class="form-group">
                            <label >Reg Id<span class="text-danger">*</span></label>
                            <input type="text" class="form-control studentid" id="exampleInputName"
                                                            placeholder="Enter Reg Id" name="personName" required/>
                            <small class="text-muted">Enter Reg Id
                             </small>
                        </div>
                 
                      
                         <div class="form-group">
                            <label >Student name<span class="text-danger">*</span></label>
                            <input type="text" class="form-control studentname" id="exampleInputDes"
                                                            placeholder="Student name"  name="branch" required/>
                            <small class="text-muted">Enter Student name
                             </small>
                        </div>
                        
                        <div class="form-group">
                          <label >Course Id <span class="text-danger">*</span></label>
                          <select name="year" class="form-control coursecode">
                            <option value="0">Select Course Code</option>
                           
                          </select>
                          <small class="text-muted">Enter Course Code
                             </small>
                        </div>

                        <div class="form-group">
                            <label >User name<span class="text-danger ">*</span></label>
                            <input type="text" class="form-control username" id="exampleInputDes"
                                                            placeholder="User name"  name="branch" required/>
                            <small class="text-muted">Enter User name
                             </small>
                        </div>
                        <div class="form-group">
                            <label >Password<span class="text-danger ">*</span></label>
                            <input type="text" class="form-control password" id="exampleInputDes"
                                                            placeholder="Password"  name="branch" required/>
                            <small class="text-muted">Enter Password
                             </small>
                        </div>
                       

                        <input type="reset" name="" value="reset" class="btn btn-warning"/>
                        <input type="submit" name="submit" value="submit" class="btn btn-primary" onClick={this.sendstudentssdata}/>
                 
              </div>
          </div>
      </div>
    </div>
</div>
<Footer/>
    </div>
  );
};

export default template;

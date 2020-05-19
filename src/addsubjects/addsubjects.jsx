import "./addsubjects.css";
import React from "react";
import Sidenav from '../sidenav/sidenav'
import Footer from "../footer/footer"
import {Link} from 'react-router-dom'
function template() {
  return (
    <div className="addsubjects">
      <Sidenav/>
      <div class="content-page">
    <div class="content">
      <div class="container">
          <div class="row">
              <div class="col-md-12 mt-3">
                  <h2 class="text-center">Add Subjects</h2>
              </div>
              <div class="col-md-12">
                  <p>Back To subjects <Link to="/subjects" href="students.php" class="btn btn-primary btn-rounded"><i class="fa fa-arrow-left"></i></Link></p>
              </div>
              <div class="col-md-6 col-lg-6 offset-md-3">
                
                  
                        <div class="form-group ">
                        <label for="email">Course Name : </label>
                        <select name="year" class="form-control validation coursename">
                        <option value="0">Course name</option>

                          </select>
                        </div>
                        <div class="form-group ">
                        <label for="email">Semister Name : </label>
                        <select name="year" class="form-control validation semcode">
                        <option value="0">Sem name</option>

                          </select>
                        </div>
                        
                         <div class="form-group">
                            <label >Subject name<span class="text-danger">*</span></label>
                            <input type="text" class="form-control subname" id="exampleInputDes"
                                                            placeholder="Enter Subject name" name="branch" required/>
                          
                        </div>
                       

                        <input type="reset" name="" value="reset" class="btn btn-warning"/>
                        <input type="submit" name="submit" value="submit" class="btn btn-primary" onClick={this.sendsubjectsdata}/>
                
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

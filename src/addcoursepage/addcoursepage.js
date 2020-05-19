import React    from "react";
import template from "./addcoursepage.jsx";
import Sidenav from '../sidenav/sidenav'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import Footer from '../footer/footer'
class addcoursepage extends React.Component {

  sendcoursedata=()=>{
    let coursedata = {
      option : "insertCourses",
      cname : $(".cname").val(),
      description : $(".cdescription").val()
    }
   if($(".cname").val() == "" || $(".cdescription").val() == ""){
     alert("please enter values")
   }else {
    $.ajax({
      type: 'POST',
      url: "http://192.168.0.14/college/api/index.php",
      data: coursedata,
      success: function(res) {
        if(res.length > 0){
          alert("Data Submitted successfully");
          $(".cname").val("");
          $(".cdescription").val("");
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
      <div className="addcoursepage">
        <Sidenav/>
        <div class="content-page">
      <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-3">
                    <h2 class="text-center">Add Course</h2>
                </div>
                <div class="col-md-12">
                    <p>Back To course <Link to="/course" href="students.php" class="btn btn-primary btn-rounded"><i class="fa fa-arrow-left"></i></Link></p>
                </div>
                <div class="col-md-6 col-lg-6 offset-md-3">
                  
                   
                        <div class="form-group">
                              <label >Course Name<span class="text-danger">*</span></label>
                               <input type="hidden" class="form-control" id="exampleInputbid"
                                                              placeholder="Enter Id" value="" name="id" required />
                              <input type="text" class="form-control cname" id="exampleInputName"
                                                              placeholder="Enter course Name"  name="personName" required/>
                              <small class="text-muted">Enter Student Name
                               </small>
                          </div>
                           <div class="form-group">
                              <label >Description<span class="text-danger">*</span></label>
                              <input type="text" class="form-control cdescription" id="exampleInputDes"
                                                              placeholder="Enter Description"  name="branch" required/>
                              <small class="text-muted">Enter Person Branch
                               </small>
                          </div>
                         
  
                          <input type="reset" name="" value="reset" class="btn btn-warning"/>
                          <input type="submit" name="submit" onClick={this.sendcoursedata} class="btn btn-primary"/>
                   
                </div>
            </div>
        </div>
      </div>
  </div>
 <Footer/>
      </div>
    );
  }
}

export default addcoursepage;

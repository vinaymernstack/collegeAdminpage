import React    from "react";
import template from "./addsemister.jsx";
import $ from 'jquery'
import Sidenav from '../sidenav/sidenav'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'

class addsemister extends React.Component {
  componentDidMount(){
    let logindata = {
      option : "getcourses",
    }
   
    $.ajax({
      type: 'POST',
      url: "http://192.168.0.14/college/api/index.php",
      data: logindata,
      success: function(res) {
        if(res.length > 0){
          console.log(res)
         for (var i = 0; i < res.length; i++){
           $(".coursecode").append(
             '<option value="'+res[i].cid+'">"'+res[i].cname+'"</option>'
           )
         }
        }
      
       },
       error: function(res) { alert("data error");
      }
})   

  }

  sendsemdata=()=>{
    let semdata = {
      option : "insertsem",
      semcode : $(".semcode").val(),
      cid : $(".coursecode").val()
    }
    console.log(semdata,"dsads")
   if($(".semcode").val() == "0" || $(".coursecode").val() == "0"){
     alert("please enter values")
   }else {
    $.ajax({
      type: 'POST',
      url: "http://192.168.0.14/college/api/index.php",
      data: semdata,
      success: function(res) {
        if(res.length > 0){
          alert("Data Submitted successfully");
          // $(".semcode").val("");
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
    return(
      <div className="addsemister">
      <Sidenav/>
      <div class="content-page">
    <div class="content">
      <div class="container">
          <div class="row">
              <div class="col-md-12 mt-3">
                  <h2 class="text-center">Add Semister</h2>
              </div>
              <div class="col-md-12">
                  <p>Back To Semister <Link to="/Semister" class="btn btn-primary btn-rounded"><i class="fa fa-arrow-left"></i></Link></p>
              </div>
              <div class="col-md-6 col-lg-6 offset-md-3">
                
                 
                     
                        <div class="form-group">
                          <label >Course Id <span class="text-danger">*</span></label>
                          <select name="year" class="form-control coursecode">
                            <option value="0">Select Course Code</option>
                           
                          </select>
                          <small class="text-muted">Enter Course Code
                             </small>
                        </div>
                         
                        <div class="form-group">
                          <label >Semister Code <span class="text-danger">*</span></label>
                          <select name="year" class="form-control semcode">
                            <option value="0">Select Semister Code</option>
                            <option value="1-1">1-1</option>
                            <option value="1-2">1-2</option>
                            <option value="2-1">2-1</option>
                            <option value="2-2">2-2</option>
                            <option value="3-1">3-1</option>
                            <option value="3-2">3-2</option>
                            <option value="4-1">4-1</option>
                            <option value="4-2">4-2</option>
                          </select>
                          <small class="text-muted">Enter Semister Code
                             </small>
                        </div>
                       
                       
                        <input type="reset" name="" value="reset" class="btn btn-warning"/>
                        <input type="submit" name="submit" onClick={this.sendsemdata} class="btn btn-primary"/>
               
              </div>
          </div>
      </div>
    </div>
</div>
<Footer/>
    </div>
    )
  }
}
export default addsemister;

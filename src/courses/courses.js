import React    from "react";
import template from "./courses.jsx";
import $ from 'jquery'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Footer from '../footer/footer'
import Sidenav from '../sidenav/sidenav'



class courses extends React.Component {
  constructor(props) {
    super(props);
    var coursedata = [];
    let logindata = {
      option : "getcourses",
    }  
    $.ajax({
      type: 'POST',
      url: "http://192.168.0.14/college/api/index.php",
      data: logindata,
      async : false,
      success: function(res) {
        if(res.length > 0){
          console.log(res)
        coursedata.push(res)   
        }
      
       },
       error: function(res) { alert("data error");
      }
})
var cdata = coursedata[0];
this.state = { cdata };
// // let data = coursedata;
// // console.log(data)
// console.log(coursedata, "map")
  }

  deletebtn=(event)=>{
    let id = event.target.getAttribute("data-id");
    let deletedata = {
      option : "coursesdelete",
      cid : id
    }
    if (window.confirm("Are you sure you want to delete?")) {
      $.ajax({
        type: 'POST',
        url: "http://192.168.0.14/college/api/index.php",
        data: deletedata,
        success: function(res) {
          alert(res.success)
          window.location.replace("/course"); 
         },
         error: function(res) { alert("data error");
        }
  })
    } else {

    }

  }

  

  editcoursedata=(event)=>{
  var index = event.target.getAttribute("data-index");
  var id = event.target.getAttribute("data-id");
  var data = this.state.cdata;
  $(".courseEdit").val(data[index].cname);
  $(".cdesc").val(data[index].description);

  $(".submitbtn").click(function() {
    let submitdata = {
      option : "courseEdit",
      cid : id,
      cname: $(".courseEdit").val(),
      description : $(".cdesc").val()
    }
    if (window.confirm("Are you sure you want to Save Changes?")) {
      $.ajax({
        type: 'POST',
        url: "http://192.168.0.14/college/api/index.php",
        data: submitdata,
        success: function(res) {
          // alert(res.success)
          window.location.replace("/course"); 
         },
         error: function(res) { alert("data error");
        }
  })
    } else {

    }
  }) 
  }

  render() {
     
        return (
      <div>
        <Sidenav/>
      <div class="content-page">
      <div class="content">
          
         
          <div class="container-fluid">
              
            
              <div class="row">
                  <div class="col-12">
                      <div class="page-title-box">
                          <div class="page-title-right">
                              <ol class="breadcrumb m-0">
                                  <li class="breadcrumb-item"><a href="javascript: void(0);">College</a></li>
                                  <li class="breadcrumb-item active">Dashboard</li>
                              </ol>
                          </div>
                          <h4 class="page-title">Dashboard</h4>
                      </div>
                  </div>
              </div>     
              
              <div class="row">
                 <div class="col-12">
                     <h2 class="h2 text-center">Courses</h2>
                 </div>
                  
      <div class="col-md-12">
          <p>Add Course Here <Link to="/addcourse" class="btn btn-primary btn-rounded"><i class="fa fa-plus"></i></Link></p>
      </div>
      <div class="col-md-12">

          <table id="datatable" class="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                              <thead>
                              <tr>
                                  <th>Course Id</th>
                                  <th>Course Name</th>
                                  <th>Description</th>
                                  <th>Changes</th>
                                  
                              </tr>
                              </thead>
                              <tbody class="coursetable">
                              {this.state.cdata.map((person, index) => (
                               
                                <tr>
                                  <td>{person.cid}</td>
                                  <td>
                                  {person.cname}
                                </td>
                                <td>
                                  {person.description}
                                </td>
                                <td><span  onClick={this.editcoursedata}><a class="btn btn-secondary editbtn" data-id={person.cid} data-index={index}  data-toggle="modal" data-target="#exampleModal" 
                                 >Edit</a></span>&nbsp; &nbsp;<a class="btn btn-warning deletebtn" data-id={person.cid} onClick={this.deletebtn}>Delete</a></td>
                                </tr>
                            
                              
                            ))}
                            </tbody>
                             
                      </table>
                

      </div>
              </div>
           


              
              </div>
             
              
          </div> 

      </div> 

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit coursedetails</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      <div class="form-group">
        <label for="exampleInputPassword1">Course name</label>
        <input type="text" class="form-control courseEdit" id="exampleInputPassword1" placeholder="course name"/>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <input type="text" class="form-control cdesc" id="exampleInputPassword1" placeholder="description"/>
      </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary submitbtn">Save changes</button>
      </div>
    </div>
  </div>
</div>
     
      <Footer/>
      </div>
    )
  }
}

export default courses;

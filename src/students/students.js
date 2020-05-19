import React    from "react";
import template from "./students.jsx";
import $ from 'jquery'
import Sidenav from '../sidenav/sidenav'
import {Link} from "react-router-dom"
import Footer from '../footer/footer'
class students extends React.Component {

  constructor(){
    super()
    var semisterdata = [];
    let logindata = {
      option : "getstudents",
    }
$.ajax({
  type: 'POST',
  url: "http://192.168.0.14/college/api/index.php",
  data: logindata,
  async: false,
  success: function(res) {
    if(res.length > 0){
      console.log(res)
      semisterdata.push(res) 
    }else {
      
    }
  
   },
   error: function(res) { alert("data error");
  }
})

var semdata = semisterdata[0];
this.state = { semdata };
   

  }

  deletebtn=(event)=>{
    var id = event.target.getAttribute("data-id");
    let deletedata = {
      option : "studentdel",
      sid : id
    }
    if (window.confirm("Are you sure you want to delete?")) {
      $.ajax({
        type: 'POST',
        url: "http://192.168.0.14/college/api/index.php",
        data: deletedata,
        success: function(res) {
       
        
         },
         error: function(res) { alert("data error");
        }
  })
    } else {

    }
  
    
  }

  editcoursedata=(event)=>{
    var index = event.target.getAttribute("data-index");
    var did = event.target.getAttribute("data-id");
    var data = this.state.semdata;
    $(".sregno").val(data[index].regno);
    $(".sname").val(data[index].name);
    $(".scourse").val(data[index].cid);
    $(".suser").val(data[index].username);
    $(".spass").val(data[index].password);
  
    $(".submitbtn").click(function() {
      let submitdata = {
        option : "studentedit",
        id : did,
        regno: $(".sregno").val(),
        name : $(".sname").val(),
        cid : $(".scourse").val(),
        username : $(".suser").val(),
        password :$(".spass").val()
      }
      if (window.confirm("Are you sure you want to Save Changes?")) {
        $.ajax({
          type: 'POST',
          url: "http://192.168.0.14/college/api/index.php",
          data: submitdata,
          success: function(res) {
            // alert(res.success)
            window.location.replace("/students"); 
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
                               <h2 class="h2 text-center">Student</h2>
                           </div>
                            
                <div class="col-md-12">
                    <p>Add Student Here <Link to="/addstudents" class="btn btn-primary btn-rounded"><i class="fa fa-plus"></i></Link></p>
                </div>
                <div class="col-md-12">
      
                    <table id="datatable" class="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                        <thead>
                                        <tr>
                                            
                                            <th>Student Id</th>
                                            <th>Reg No.</th>
                                            <th>Student Name</th>
                                            <th>Course Id</th>
                                            <th>username</th>
                                            <th>password</th>
                                            <th>changes</th>
                                           
                                            
                                        </tr>
                                        </thead>


                                        <tbody class="studenttable">
                                        {this.state.semdata.map((person, index) => (
                                <tr>
                                  <td>{person.id}</td>
                                  <td>
                                  {person.regno}
                                </td>
                                <td>
                                  {person.name}
                                </td>
                                <td>
                                  {person.cid}
                                </td>
                                <td>
                                  {person.username}
                                </td>
                                <td>
                                  {person.password}
                                </td>
                                <td><span  onClick={this.editcoursedata}><a class="btn btn-secondary editbtn" data-id={person.id} data-index={index} data-toggle="modal" data-target="#exampleModal"
                                 >Edit</a></span>&nbsp; &nbsp;<Link to="/student"><a class="btn btn-warning deletebtn" data-id={person.id} onClick={this.deletebtn}>Delete</a></Link></td>
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
        <h5 class="modal-title" id="exampleModalLabel">Edit Student details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      <div class="form-group">
        <label for="exampleInputPassword1">Reg Id </label>
        <input type="text" class="form-control sregno" id="exampleInputPassword1" placeholder="Reg Id"/>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Student name</label>
        <input type="text" class="form-control sname" id="exampleInputPassword1" placeholder="Student name"/>
      </div>
        
      <div class="form-group">
        <label for="exampleInputPassword1">Course Id</label>
        <input type="text" class="form-control scourse" id="exampleInputPassword1" placeholder="course Id" disabled = "disabled"/>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">User Name</label>
        <input type="text" class="form-control suser" id="exampleInputPassword1" placeholder="User Name"/>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">password</label>
        <input type="text" class="form-control spass" id="exampleInputPassword1" placeholder="Password"/>
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
    );
  }
}

export default students;

import React    from "react";
import template from "./subjects.jsx";
import $ from 'jquery'

import Sidenav from '../sidenav/sidenav'
import Addsubjects from '../addsubjects/addsubjects'
import {Link} from "react-router-dom"
import Footer from '../footer/footer'
class subjects extends React.Component {
  constructor(){
    super()
    var semisterdata = [];
    let logindata = {
      option : "getsubjects",
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
      option : "subdelete",
      subid : id
    }
    if (window.confirm("Are you sure you want to delete?")) {
      $.ajax({
        type: 'POST',
        url: "http://192.168.0.14/college/api/index.php",
        data: deletedata,
        success: function(res) {
          alert(res.success)
          window.location.replace("/subjects"); 
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
    var data = this.state.semdata;
    $(".sname").val(data[index].semid);
    $(".sdescription").val(data[index].subname);
  
    $(".submitbtn").click(function() {
      let submitdata = {
        option : "subedit",
        subid : id,
        semid: $(".sname").val(),
        subname : $(".sdescription").val()
      }
      if (window.confirm("Are you sure you want to Save Changes?")) {
        $.ajax({
          type: 'POST',
          url: "http://192.168.0.14/college/api/index.php",
          data: submitdata,
          success: function(res) {
            // alert(res.success)
            window.location.replace("/subjects"); 
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
                               <h2 class="h2 text-center">subjects</h2>
                           </div>
                            
                <div class="col-md-12">
                    <p>Add Subjects Here <Link to="/Addsubjects" class="btn btn-primary btn-rounded"><i class="fa fa-plus"></i></Link></p>
                </div>
                <div class="col-md-12">
      
                    <table id="datatable" class="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                        <thead>
                                        <tr>
                                            <th>subject id</th>
                                            <th>Sem Id</th>
                                            <th>Sub Name</th>
                                            <th>Changes</th>
                                           
                                            
                                        </tr>
                                        </thead>


                                        <tbody class="studentlist">
                                            
                                           {this.state.semdata.map((person, index) => (
                                <tr>
                                  <td>{person.subid}</td>
                                  <td>
                                  {person.semid}
                                </td>
                                <td>
                                  {person.subname}
                                </td>
                                <td><span  onClick={this.editcoursedata}><a class="btn btn-secondary editbtn" data-id={person.subid} data-index={index}  data-toggle="modal" data-target="#exampleModal"
                                 >Edit</a></span>&nbsp; &nbsp;<a class="btn btn-warning deletebtn" data-id={person.subid} onClick={this.deletebtn}>Delete</a></td>
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
        <h5 class="modal-title" id="exampleModalLabel">Edit subject details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="form-group">
        <label for="exampleInputPassword1">Subject name</label>
        <input type="text" class="form-control sdescription" id="exampleInputPassword1" placeholder="description"/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Sem code</label>
        <input type="text" class="form-control sname" id="exampleInputPassword1" placeholder="Subject name" disabled="disabled"/>
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

export default subjects;

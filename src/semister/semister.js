import React    from "react";
import template from "./semister.jsx";
import Sidenav from '../sidenav/sidenav'
import {Link} from "react-router-dom"
import $ from 'jquery'
import Footer from '../footer/footer'

class semister extends React.Component {

  constructor(){
    super()

    var semisterdata = [];
    let logindata = {
      option : "getsemester",
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
      option : "semdelete",
      semid : id
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
    var id = event.target.getAttribute("data-id");
    var data = this.state.semdata;
    $(".semcode").val(data[index].semcode);
    $(".cid").val(data[index].cid);
  
    $(".submitbtn").click(function() {
      let submitdata = {
        option : "semedit",
        semid : id,
        semcode: $(".semcode").val(),
        cid : $(".cid").val()
      }
      if (window.confirm("Are you sure you want to Save Changes?")) {
        $.ajax({
          type: 'POST',
          url: "http://192.168.0.14/college/api/index.php",
          data: submitdata,
          success: function(res) {
            // alert(res.success)
            window.location.replace("/Semister"); 
           },
           error: function(res) { alert("data error");
          }
    })
      } else {
  
      }
    })
  
  
  
   
    }


  render() {
    return(
      <div className="semister">
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
                               <h2 class="h2 text-center">Semister</h2>
                           </div>
                            
                <div class="col-md-12">
                    <p>Add Semister Here <Link to="/addsemister" class="btn btn-primary btn-rounded"><i class="fa fa-plus"></i></Link></p>
                </div>
                <div class="col-md-12">
      
                    <table id="datatable" class="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                        <thead>
                                        <tr>
                                            <th>Semister Id</th>
                                            <th>Semister code</th>
                                            <th>Course Id</th>
                                            <th>Changes</th>
                                           
                                            
                                        </tr>
                                        </thead>
                                        <tbody class="semtable">

                                           {this.state.semdata.map((person, index) => (
                                <tr>
                                  <td>{person.semid}</td>
                                  <td>
                                  {person.semcode}
                                </td>
                                <td>
                                  {person.cid}
                                </td>
                                <td><span  onClick={this.editcoursedata}><a class="btn btn-secondary editbtn" data-id={person.semid} data-index={index}  data-toggle="modal" data-target="#exampleModal"
                                 >Edit</a></span>&nbsp; &nbsp;<Link to="/semister"><a class="btn btn-warning deletebtn" data-id={person.semid} onClick={this.deletebtn}>Delete</a></Link></td>
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
        <h5 class="modal-title" id="exampleModalLabel">Edit semisterdetails</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      <div class="form-group">
        <label for="exampleInputPassword1">Semister code</label>
        <input type="text" class="form-control semcode" id="exampleInputPassword1" placeholder="Semister code"/>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Course id</label>
        <input type="text" class="form-control cid" id="exampleInputPassword1" placeholder="Course id" disabled="disabled"/>
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

export default semister;

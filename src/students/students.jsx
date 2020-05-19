import "./students.css";
import React from "react";
import Sidenav from '../sidenav/sidenav'
import {Link} from "react-router-dom"
import Footer from '../footer/footer'
function template() {
  return (
    <div className="students">
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
                                <td><a class="btn btn-secondary editbtn" data-id={person.id}  data-toggle="modal" data-target="#exampleModal"
                                 >Edit</a>&nbsp; &nbsp;<a class="btn btn-warning deletebtn" data-id={person.id} onClick={this.deletebtn}>Delete</a></td>
                                </tr>
                            
                              
                            ))}
                                        
                                    </tbody>
                                </table>
                          

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

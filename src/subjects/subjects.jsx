import "./subjects.css";
import React from "react";
import Sidenav from '../sidenav/sidenav'
import Addsubjects from '../addsubjects/addsubjects'
import {Link} from "react-router-dom"
import Footer from '../footer/footer'
function template() {
  return (
    <div className="subjects">
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
                                            <th>subject Name</th>
                                            <th>Description</th>
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
                                <td><a class="btn btn-secondary editbtn" data-id={person.semid}  data-toggle="modal" data-target="#exampleModal"
                                 >Edit</a>&nbsp; &nbsp;<a class="btn btn-warning deletebtn" data-id={person.semid} onClick={this.deletebtn}>Delete</a></td>
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

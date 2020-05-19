import React, { Component }    from "react";
import Sidenavtp from "../sidenavtpo/sidenavtpo";
import Reports from '../reports/reports'
import $ from 'jquery'
import marks from "../marks/marks";
class sidenavreports extends Component{

    totalreports=()=>{
        var marksdataa = {
            option : "totalreports"
          }

          $.ajax({
            type: 'POST',
            url: "http://localhost/college/api/index.php",
            data: marksdataa,
            success: function(res) {
              if(res.length > 0){
                  var $percent = $(".regid").val();
                  if($percent >= 60){
                      let marksarray = [];
                      for(var i =0; i < res.length; i++){
                        var p = res[i]["data"][0];
                      
                        var tsub = parseInt(p.totalsubjects);
                        var sum = Math.round(parseInt(p.totalexternal) + parseInt(p.totalinternal));

                        var result = parseInt(sum) / tsub;
                        var percent = result * 100;
                        var cgpa = parseInt(percent);
                        if(cgpa >=60){
                        $(".studenttable").append('<tr><td>'+p.regno+'</td><td>'+p.Studentname+'</td><td>'+cgpa+' %</td></tr>')
                        }
                      }
                  }else {
                      alert("percentage cant be lower than 60")
                  }

              }else {
                  alert("Nothing Found");
              }
             },
             error: function(res) { alert("data error");
            }
      })
        
    }
    
    render(){
        return(
            <div>
                <Sidenavtp/>
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
                                 <div class="col-12" style={{marginBottom:"2%"}}>
                                     <h2 class="h2 text-center">Total Reports</h2>
                                 </div>
                                  
                     
                      <div class="col-md-12">
      
      
                      <div class="form-inline" >
                              <div class="form-group RegIdInMarks">
                              <label for="email">Enter Percentage : </label>
                              <input type="number" class="form-control regid inputmarks" id="email"/>
                              </div>
      
      
                              
                           
      
      
      
                             <button type="button" class="btn btn-warning " onClick={this.totalreports}>Submit</button> 
                              
                      </div>  
      
                      <table id="datatable" class="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                              <thead>
                                              <tr>
                                                  <th>Registration No.</th>                                            
                                                  <th>Student name</th>
                                                  <th>CGPA</th>
                                                                                                               
                                              </tr>
                                              </thead>
                                              <tbody class="studenttable">
                                            
                                          </tbody>
                                      </table>                    
                               </div>
                              </div>
      
                              </div>
           
                          </div> 
      
                      </div>
            </div>
        )
    }
}
export default sidenavreports
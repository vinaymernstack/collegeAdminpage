import React, { Component } from 'react'
import Sidenav from '../sidenav/sidenav'
import Footer from '../footer/footer'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class reports extends Component {

    sendmarksdata=()=>{
        var marksdataa = {
            option : "reports",
            regno : $(".regid").val()
          }

          if($(".regid").val()==""){
            alert("enter values")
          }else {
            $.ajax({
                type: 'POST',
                url: "http://192.168.0.14/college/api/index.php",
                data: marksdataa,
                success: function(res) {
                    // var resdata = [];
                
                  if(res.length > 0){
                  //res 
                  let data = [];
                  data.push(res); 
                  console.log(data)     
                
                  for (let temp in data[0]){
                      console.log(data[0][temp])
                      var tr = $("<tr>")
                     
                      for(let temp1 in data[0][temp]){
                          console.log(data[0][temp][temp1]+"arreyy")
                          let td1 = $("<td>").html(temp1)
                          let td2 = $("<td>")
                          let td3 =  $("<td>")
                          let td4 =  $("<td>")
                          let td5 =  $("<td>")
                         
                          tr.append(td1)
          
                          for(let temp2 in data[0][temp][temp1]){
                              console.log(data[0][temp][temp1][temp2])
                            
                             
                              
                              for(let temp3 in data[0][temp][temp1][temp2]){
                                  console.log(data[0][temp][temp1][temp2][temp3])
                                 
                                  if(temp3==="subname"){
                                      var table1 = $("<table>").css({width:"100%"})
                                      let tr1 = $("<tr>")
                                  let td = $("<td>").html(data[0][temp][temp1][temp2][temp3])
                                  tr1.append(td)
                                  table1.append(tr1)
                                  }
                                   if(temp3==="external_marks"){
                                      var table2 = $("<table>").css({width:"100%"})
                                      let tr2 = $("<tr>")
                                  let td = $("<td>").html(data[0][temp][temp1][temp2][temp3])
                                  tr2.append(td)
                                  table2.append(tr2)
                                  }
                                  if(temp3==="internal_marks"){
                                      var table3 = $("<table>").css({width:"100%"})
                                      let tr3 = $("<tr>")
                                  let td = $("<td>").html(data[0][temp][temp1][temp2][temp3])
                                  tr3.append(td)
                                  table3.append(tr3)
                                      }
                                  if(temp3==="result"){
                                      var table4 = $("<table>").css({width:"100%"})
                                      let tr4 = $("<tr>")
                                      let td = $("<td>").html(data[0][temp][temp1][temp2][temp3])
                                      if(data[0][temp][temp1][temp2][temp3]==="F"){
                                          td.css({color:"red",fontWeight:"bold"})
                                      }else {
                                        td.css({color:"#008000",fontWeight:"bold"})
                                      }
                                      tr4.append(td)
                                      table4.append(tr4)
                                  }
                              }
                              
                              td2.append(table1)
                              td3.append(table2)
                              td4.append(table3)
                              td5.append(table4)
                              tr.append(td2)
                              tr.append(td3)
                              tr.append(td4)
                              tr.append(td5)
                              $(".studenttable").append(tr)
                          }
                      }
                     
                  }


                  //res
                    
                    }
                    else {
                        alert("Nothing Found");
                        window.location.replace("/reports");
                    } 
                 },
                 error: function(res) { alert("data error");
                }
          })
        }
        
    }
    render(){
       
        return(
            <div className="reports">
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
                                 <div class="col-12" style={{marginBottom:"2%"}}>
                                     <h2 class="h2 text-center">Reports</h2>
                                 </div>
                                  
                     
                      <div class="col-md-12">
      
      
                      <div class="form-inline" >
                              <div class="form-group RegIdInMarks">
                              <label for="email">Enter Reg Id : </label>
                              <input type="text" class="form-control regid inputmarks"  id="email"/>
                              </div>
    
      
                             <button type="button" class="btn btn-warning " onClick={this.sendmarksdata}>Submit</button> 
                              
                      </div>  
      
                      <table id="datatable" class="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                              <thead>
                                              <tr>
                                                  <th>semister</th>                                            
                                                  <th>subject</th>
                                                  <th>External Marks</th>
                                                  <th>Internal Marks</th>
                                                  <th>Result</th>
                                                                                                               
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
      
                     <Footer/>
          </div>
        
        )
    }
}

export default reports


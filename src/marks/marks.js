import React    from "react";
import template from "./marks.jsx";
import $ from 'jquery'
import Sidenav from '../sidenav/sidenav'
import {Link} from "react-router-dom"
import Footer from '../footer/footer'
let marksstore = [];
class marks extends React.Component {
  state={
    marksstore:[]
  }

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
           $(".coursename").append(
             '<option value="'+res[i].cid+'">"'+res[i].cname+'"</option>'
           )
         }
         $(".coursename").change(function(){
           var id = $(this).val(); 
           let cdata = {
             option : "getsemfunc",
             cid : id
           }

           $.ajax({
            type: 'POST',
            url: "http://192.168.0.14/college/api/index.php",
            data: cdata,
            success: function(res) {
              if(res.length > 0){
                $(".semcode").empty();
                $(".semcode").append("<option value='0'>Select Sem</option>");
               for (var i = 0; i < res.length; i++){
                 
                 $(".semcode").append(
                   '<option value="'+res[i].semid+'">"'+res[i].semcode+'"</option>'
                 )
               }
              }
            
             },
             error: function(res) { alert("data error");
            }
      })   

         })
        }
      
       },
       error: function(res) { alert("data error");
      }
})   
  }

 
  sendmarksdata=()=>{
  

    var marksdataa = {
      option : "getmarks",
      regno : $(".regid").val(),
      semcode : $(".semcode").val()
    }
    // alert($(".semid").val())
    if($(".regid").val()==""||$(".semid").val()==""||$(".courseid").val()==""){

    
      alert("enter values")
     
    }else{
      
      $.ajax({
        type: 'POST',
        url: "http://localhost/college/api/index.php",
        data: marksdataa,
        success: function(res) {
          console.log(res)
          if(res.length > 0){
             for(var i=0; i < res.length; i++){
              var person = res[i];
              var index = i;
              var regno = $(".regid").val();
              $(".studenttable").append(
              '<tr class="markstable'+person.marksid+'"><td>'+person.subname+'</td><td><input type="text" class="form-control internalmarks'+index+'" id="exampleInputPassword1" value="'+person.external_marks+'"/></td><td><input type="text" class="form-control externalmarks'+index+'" id="exampleInputPassword1" value="'+person.internal_marks+'"/></td><td><a class="btn btn-secondary editbtn" id="edit'+index+'"  data-id="'+person.marksid+'" data-index="'+index+'"  data-toggle="modal" data-target="#exampleModal">Edit</a>&nbsp; &nbsp;<a class="btn btn-success submitbtn" id="submitbtn'+index+'" data-sub="'+person.subid+'" data-sem="'+person.semcode+'"  data-id="'+person.marksid+'" data-index="'+index+'" data-reg="'+regno+'" style="display:none;"  data-toggle="modal" data-target="#exampleModal">Submit</a>&nbsp; &nbsp;<a class="btn btn-warning deletebtn" data-id="'+person.marksid+'" data-index="'+index+'" onClick={this.deletebtn}>Delete</a></td></tr>'
              )

             }
             $("input").attr('disabled', true);
             $(".inputmarks").attr('disabled',false);

             $(".editbtn").click(function(){
               var i = $(this).attr("data-index"); 
              $(".internalmarks"+i+"").attr('disabled',false);
              $(".externalmarks"+i+"").attr('disabled', false);

              $("#submitbtn"+i+"").show();
              $("#edit"+i).hide();
            })

            $(".submitbtn").click(function(){
              var i = $(this).attr("data-index");
              var markid = $(this).attr("data-id");
              var regn = $(this).attr("data-reg");
              var semc = $(this).attr("data-sem");
              var sub = $(this).attr("data-sub");
              var internal = $(".internalmarks"+i).val();
              var external = $(".externalmarks"+i).val();
             
              let submitdata = {
                option : "updatemarks",
                marksid: markid,
                regno : regn,
                semcode : semc,
                subid : sub,
                internalmarks : internal,
                externalmarks : external
              }
              if (window.confirm("Are you sure you want to Save Changes?")) {
                console.log(submitdata)
                $.ajax({
                  type: 'POST',
                  url: "http://localhost/college/api/index.php",
                  data: submitdata,
                  success: function(res) {
                    alert(res.success)
                    $(".internalmarks"+i+"").attr('disabled',true);
                    $(".externalmarks"+i+"").attr('disabled', true);
                    $("#submitbtn"+i+"").hide();
                    $("#edit"+i).show();
                   },
                   error: function(res) { alert("data error");
                  }
            })
              } else {
          
              }
            })

            $(".deletebtn").click(function(){
              var id = $(this).attr("data-id");
              let deletedata = {
                option : "marksdel",
                marksid : id
              }
              if (window.confirm("Are you sure you want to delete?")) {
                $.ajax({
                  type: 'POST',
                  url: "http://192.168.0.14/college/api/index.php",
                  data: deletedata,
                  success: function(res) {
                    alert(res.success)
                    $(".markstable"+id+"").hide();
                   },
                   error: function(res) { alert("data error");
                  }
            })
              } else {
          
              }
            })
           
            
          }else {
            alert("Sorry Nothing Found On this Search!!");
            window.location.replace("/marks");
          }
        
         },
         error: function(res) { 
          alert("err")
         
          
          
        }
  })

   
    
  
    }

  }


//   list = this.marksstore.map((person,index)=>{
//     alert(person.subname,"map")
//   return <tr>
//              <td><input type="text" class="form-control subname" id="exampleInputPassword1" placeholder={person.subname}/></td>
//              <td>
//              <input type="text" class="form-control internalmarks" id="exampleInputPassword1" placeholder={person.internal_marks}/>
//            </td>
//            <td>
//           <input type="text" class="form-control externalmarks" id="exampleInputPassword1" placeholder={person.external_marks}/>
//            </td>
//           <td><span  onClick={this.editcoursedata}><a class="btn btn-secondary editbtn" data-id={person.marksid} data-index={index}  data-toggle="modal" data-target="#exampleModal"
//            >Edit</a></span>&nbsp; &nbsp;<a class="btn btn-warning deletebtn" data-id={person.marksid} onClick={this.deletebtn}>Delete</a></td>
//            </tr>

// })
  
  render() {
    // if(this.state.mdata.length > 0){
    //   const list =this.state.mdata.map(function(person,index){
    //        return <tr>
    //           <td><input type="text" class="form-control subname" id="exampleInputPassword1" placeholder={person.subname}/></td>
    //           <td>
    //           <input type="text" class="form-control internalmarks" id="exampleInputPassword1" placeholder={person.internal_marks}/>
    //         </td>
    //         <td>
    //         <input type="text" class="form-control externalmarks" id="exampleInputPassword1" placeholder={person.external_marks}/>
    //         </td>
    //         <td><span  onClick={this.editcoursedata}><a class="btn btn-secondary editbtn" data-id={person.marksid} data-index={index}  data-toggle="modal" data-target="#exampleModal"
    //         >Edit</a></span>&nbsp; &nbsp;<a class="btn btn-warning deletebtn" data-id={person.marksid} onClick={this.deletebtn}>Delete</a></td>
    //         </tr>
    //   })
    // }else {
    //   alert("something went wrong")
    // }
    return (
      <div className="marks">
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
                               <h2 class="h2 text-center">Marks</h2>
                           </div>
                            
                <div class="col-md-12">
                    <p>Add Marks Here <Link to="/Addmarks" class="btn btn-primary btn-rounded"><i class="fa fa-plus"></i></Link></p>
                </div>
                <div class="col-md-12">


                <div class="form-inline" >
                        <div class="form-group RegIdInMarks">
                        <label for="email">Enter Reg Id : </label>
                        <input type="email" class="form-control regid inputmarks" id="email"/>
                        </div>


                        
                        <div class="form-group RegIdInMarks">
                        <label for="email">Select Course : </label>
                        <select name="year" class="form-control courseid inputmarks coursename">
                        <option value="0">Select Course</option>
                           
                          </select>
                        </div>

                        <div class="form-group RegIdInMarks">
                        <label for="email">Select Semister Code : </label>
                        <select name="year" class="form-control semcode inputmarks">
                        <option value="0">Select Semister Code</option>
                         
                          </select>
                        </div>


                       <button type="button" class="btn btn-warning " onClick={this.sendmarksdata}>Submit</button> 
                        
                </div>  

                <table id="datatable" class="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                        <thead>
                                        <tr>                                            
                                            <th>subject</th>
                                            <th>External Marks</th>
                                            <th>Internal Marks</th>
                                            <th>changes</th>
                                            
                                                                                       
                                        </tr>
                                        </thead>
                                        <tbody class="studenttable">
                                           
                                      {/* {this.list} */}
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

export default marks;

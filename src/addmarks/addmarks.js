import React    from "react";
import template from "./addmarks.jsx";
import $ from 'jquery'
import Sidenav from '../sidenav/sidenav'
import {Link} from 'react-router-dom'
import Footer from '../footer/footer'
class addmarks extends React.Component {

  componentDidMount(){
    let ldata = {
      option : "getcourses",
    }
   
    $.ajax({
      type: 'POST',
      url: "http://192.168.0.14/college/api/index.php",
      data: ldata,
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
            url: "http://localhost/college/api/index.php",
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



  sendmarksata=()=>{
    let semdmarksata = {
      option : "insertmarks",
      regno : $(".regid").val(),
      semcode : $(".semcode").val(),
      subid : $(".sublist").val(),
      internalmarks: $(".internal_marks").val(),
      externalmarks: $(".external_marks").val()
      
    }
    console.log(semdmarksata,"dsads")
   if($(".semcode").val() == "0" || $(".regid").val()==""||$(".internal_marks").val()==""||$(".external_marks").val()==""){
     alert("please enter values")
   }else {
     alert("df")
    $.ajax({
      type: 'POST',
      url: "http://localhost/college/api/index.php",
      data: semdmarksata,
      success: function(res) {
       alert(res.success)
       },
       error: function(res) {alert("error");}
  })

  }
}

changesemdata=(event)=>{
  var id = event.target.value;
    let datav = {
     option : "getsubfunc",
     semid : id
   }

   $.ajax({
    type: 'POST',
    url: "http://localhost/college/api/index.php",
    data: datav,
    success: function(res) {
      console.log(res)
      if(res.length > 0){
        $(".sublist").empty();
        $(".sublist").append("<option value='0'>Select Subjects</option>");
       for (var i = 0; i < res.length; i++){
         $(".sublist").append(
           '<option value="'+res[i].subid+'">"'+res[i].subname+'"</option>'
         )
       }

      }
    
     },
     error: function(res) { alert("data error");
    }
   })

}


  render() {
    return (
      <div className="addmarks">
      <Sidenav/>
      <div class="content-page">
    <div class="content">
      <div class="container">
          <div class="row">
              <div class="col-md-12 mt-3">
                  <h2 class="text-center">Add Marks</h2>
              </div>
              <div class="col-md-12">
                  <p>Back To MarksList <Link to="/marks" href="students.php" class="btn btn-primary btn-rounded"><i class="fa fa-arrow-left"></i></Link></p>
              </div>
              <div class="col-md-6 col-lg-6 offset-md-3">
                
                 
                      <div class="form-group ">
                            <label >Reg Id<span class="text-danger">*</span></label>
                            
                            <input type="text" class="form-control regid validation" id="exampleInputName"
                                                            placeholder="Enter Reg Id"  name="personName" required/>
                            <small class="text-muted">Enter Reg Id
                             </small>
                        </div>
                  
                        <div class="form-group ">
                        <label for="email">Course Name : </label>
                        <select name="year" class="form-control validation coursename">
                        <option value="0">Course name</option>

                          </select>
                        </div>
                        <div class="form-group ">
                        <label for="email">Semister Name : </label>
                        <select name="year" class="form-control validation semcode" onChange={this.changesemdata}>
                        <option value="0">Sem name</option>

                          </select>
                        </div>

                        
                        <div class="form-group ">
                        <label for="email">Sub Id : </label>
                        <select name="year" class="form-control sublist">
                        <option value="0">Enter Sub Id</option>
                           
                          </select>
                        </div>

                        <div class="form-group">
                            <label >External Marks<span class="text-danger">*</span></label>
                            <input type="text" class="form-control external_marks" id="exampleInputDes"
                                                            placeholder="External Marks"  name="branch" required/>
                            
                        </div>

                        
                        <div class="form-group">
                            <label >Internal Marks<span class="text-danger">*</span></label>
                            <input type="text" class="form-control internal_marks" id="exampleInputDes"
                                                            placeholder="Internal Marks"  name="branch" required/>
                          
                        </div>
                        
                  
                       

                        <input type="reset" name="" value="reset" class="btn btn-warning"/>
                        <input type="submit" name="submit" value="submit" class="btn btn-primary" onClick={this.sendmarksata}/>
                 
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

export default addmarks;

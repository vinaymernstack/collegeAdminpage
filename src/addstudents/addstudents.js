import React    from "react";
import template from "./addstudents.jsx";
import $ from 'jquery'
class addstudents extends React.Component {

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
           $(".coursecode").append(
             '<option value="'+res[i].cid+'">"'+res[i].cname+'"</option>'
           )
         }
        }
      
       },
       error: function(res) { alert("data error");
      }
})   

  }
  
  sendstudentssdata=()=>{
    let studentdata = {
      option : "insertStudent",
      regno : $(".studentid").val(),
      name : $(".studentname").val(),
      cid : $(".coursecode").val(),
      username : $(".username").val(),
      password : $(".password").val(),
    }
    console.log(studentdata,"dsads")
   if($(".studentid").val() == "" || $(".studentname").val() == ""|| $(".username").val() == ""|| $(".password").val() == "" ){
     alert("please enter values")
   }else {
    $.ajax({
      type: 'POST',
      url: "http://192.168.0.14/college/api/index.php",
      data: studentdata,
      success: function(res) {
        if(res.length > 0){
          alert("Data Submitted successfully");
          // $(".semcode").val("");
          // $(".coursecode").val("");
        }else {
          alert("try again")
        }
       },
       error: function(res) { console.log("error");}
  })
  }
}
  render() {
    return template.call(this);
  }
}

export default addstudents;

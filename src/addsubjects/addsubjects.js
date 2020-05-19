import React    from "react";
import template from "./addsubjects.jsx";
import $ from 'jquery'

class addsubjects extends React.Component {

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

  sendsubjectsdata=()=>{
    let semdata = {
      option : "insertsubjects",
      semid : $(".semcode").val(),
      subname : $(".subname").val()
    }
    console.log(semdata,"dsads")
   if($(".semcode").val() == "" || $(".subname").val() == ""){
     alert("please enter values")
   }else {
    $.ajax({
      type: 'POST',
      url: "http://192.168.0.14/college/api/index.php",
      data: semdata,
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

export default addsubjects;

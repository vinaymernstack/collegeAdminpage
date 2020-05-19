import React    from "react";
import template from "./sidenav.jsx";

class sidenav extends React.Component {
  constructor(){
    super()
    var admin = localStorage.getItem("admin");
    if(admin != "admin"){
      window.location.replace("/")
    }
  }
  render() {
    return template.call(this);
  }
}

export default sidenav;

import "./login.css";
import React from "react";
import {Link} from "react-router-dom"
function template() {
  return (
    <div className="login">
      <div class="account-pages pt-5 my-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="account-card-box">
                            <div class="card mb-0">
                                <div class="card-body p-4">
                                    
                                    <div class="text-center">
                                        <div class="my-3">
                                            {/*  */}
                                        </div>
                                        <h5 class="text-muted text-uppercase py-3 font-16">Sign In</h5>
                                    </div>
    
                                      <form method="" action="" >
    
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="text" id="Email" name="Email" required="" placeholder="Enter your username"/>
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="password" required="" name="Password" id="Password" placeholder="Enter your password"/>
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="checkbox-signin" checked/>
                                                <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                            </div>
                                        </div>
    
                                        <div class="form-group text-center">
                                           <Link to="/adminpage"> <button class="btn btn-success btn-block waves-effect waves-light" type="submit" name="login" id="login"> Log In </button></Link>
                                        </div>

                                        <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Forgot your password?</a>
    
                                    </form>
                                </div> 
                            </div>                      
                        </div>               
                    </div> 
                </div>
             
            </div>
            
        </div>
    </div>
  );
};

export default template;

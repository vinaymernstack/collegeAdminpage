import "./register.css";
import React from "react";

function template() {
  return (
    <div className="register">
      <div class="account-pages pt-5 my-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="account-card-box">
                            <div class="card mb-0">
                                <div class="card-body p-4">
                                    
                                    <div class="text-center">
                                        <div class="my-3">
                                            <a href="index.html">
                                                <span><img src="assets/images/logo.png" alt="" height="28"/></span>
                                            </a>
                                        </div>
                                        <h5 class="text-muted text-uppercase py-3 font-16">Sign up</h5>
                                    </div>
    
                                    <form action="#" class="mt-2">
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="email" name="Email" required="" placeholder="Enter your email"/>
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="text" name="Username" required="" placeholder="Enter your username"/>
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="password"  name="Password" required="" id="password" placeholder="Enter your password"/>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="text" name="Designation" required="" placeholder="Enter your designation"/>
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="checkbox-signup" checked/>
                                                <label class="custom-control-label" for="checkbox-signup">I accept <a href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>
    
                                        <div class="form-group text-center">
                                            <button class="btn btn-success btn-block waves-effect waves-light" type="submit"> Join Now </button>
                                        </div>
    
                                    </form>

                                    <div class="text-center mt-4">
                                        <h5 class="text-muted py-2"><b>Sign up with</b></h5>

                                        <div class="row">
                                            <div class="col-12">
                                                <button type="button" class="btn btn-facebook waves-effect font-14 waves-light mt-3">
                                                    <i class="fab fa-facebook-f mr-1"></i> Facebook
                                                </button>
            
                                                <button type="button" class="btn btn-twitter waves-effect font-14 waves-light mt-3">
                                                    <i class="fab fa-twitter mr-1"></i> Twitter
                                                </button>
            
                                                <button type="button" class="btn btn-googleplus waves-effect font-14 waves-light mt-3">
                                                    <i class="fab fa-google-plus-g mr-1"></i> Google+
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                           
                        </div>

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-white-50">Already have account? <a href="pages-login.html" class="text-white ml-1"><b>Sign In</b></a></p>
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

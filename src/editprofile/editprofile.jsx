import "./editprofile.css";
import React from "react";

function template() {
  return (
    <div className="editprofile">
      <div class="content-page">
                <div class="content">
                    
                    
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="text-center">Enter Profile Details</h2>
                                <p>Back To Profile page <a href="profile.php" class="btn btn-primary btn-rounded"><i class="fa fa-plus"></i></a></p>
                            </div>

                            <div class="col-md-6 offset-md-3">
                                                                    
                              <form action="" method="post">
                               
                                  <div class="form-group">

                                                        <input type="hidden" name="Userid" 
                                                                placeholder="Enter id"  value="<?php echo $row['Userid']; ?> "/>
                                                        <label for="userName">Admin Name<span class="text-danger">*</span></label>
                                                        <input type="text" name="nick" parsley-trigger="change" required
                                                                placeholder="Enter admin name" class="form-control" id="userName" value="<?php echo $row['Username']; ?> "/>
                                                    </div>
                                                     <div class="form-group">
                                                        <label for="Designation">Designation<span class="text-danger">*</span></label>
                                                        <input type="text" name="desg" parsley-trigger="change" required
                                                                placeholder="Enter Designation" class="form-control" id="Designation" value="<?php echo $row['Designation']; ?> "/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="emailAddress">Email address<span class="text-danger">*</span></label>
                                                        <input type="email" name="email" parsley-trigger="change" required
                                                                placeholder="Enter email" class="form-control" id="emailAddress" value="<?php echo $row['Email']; ?> "/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="pass1">Password<span class="text-danger">*</span></label>
                                                        <input id="pass1" type="password" name="Pass" placeholder="Password" required
                                                                class="form-control" value="<?php echo md5($row['Password']); ?> "/>
                                                    </div>
                                                  <div class="form-group">
                                                        <label for="passWord2">Confirm Password <span class="text-danger">*</span></label>
                                                        <input data-parsley-equalto="#pass1" type="password" required
                                                                placeholder="Password" name="Passw" class="form-control" id="passWord2"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <input id="remember-1" type="checkbox"/>
                                                            <label for="remember-1"> Remember me </label>
                                                        </div>
                                                    </div>

                                                    <div class="form-group text-right mb-0">
                                                        <button class="btn btn-primary waves-effect waves-light mr-1" type="submit">
                                                            Submit
                                                        </button>
                                                        <button type="reset" class="btn btn-secondary waves-effect">
                                                            Reset
                                                        </button>
                                                    </div>

                              </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default template;

import "./add.css";
import React from "react";
import {Link} from "react-router-dom"
function template() {
  return (
    <div className="add">
     <div class="content-page">
    <div class="content">
      <div class="container">
          <div class="row">
              <div class="col-md-12 mt-3">
                  <h2 class="text-center">Add Course</h2>
              </div>
              <div class="col-md-12">
                  <p>Back To course <Link to="/adminpage" href="students.php" class="btn btn-primary btn-rounded"><i class="fa fa-arrow-left"></i></Link></p>
              </div>
              <div class="col-md-6 col-lg-6 offset-md-3">
                
                  <form action="" method="post">
                      <div class="form-group">
                            <label >Course Name<span class="text-danger">*</span></label>
                             <input type="hidden" class="form-control" id="exampleInputbid"
                                                            placeholder="Enter Id" value="" name="id" required />
                            <input type="text" class="form-control" id="exampleInputName"
                                                            placeholder="Enter course Name" value="" name="personName" required/>
                            <small class="text-muted">Enter Student Name
                             </small>
                        </div>
                         <div class="form-group">
                            <label >Description<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="exampleInputDes"
                                                            placeholder="Enter Description" value="" name="branch" required/>
                            <small class="text-muted">Enter Person Branch
                             </small>
                        </div>
                       

                        <input type="reset" name="" value="reset" class="btn btn-warning"/>
                        <input type="submit" name="submit" value="submit" class="btn btn-primary"/>
                  </form>
              </div>
          </div>
      </div>
    </div>
</div>
<footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                2016 - 2019 &copy;
                            </div>
                        </div>
                    </div>
                </footer>
    </div>
  );
};

export default template;

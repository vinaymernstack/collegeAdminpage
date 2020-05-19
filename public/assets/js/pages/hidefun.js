 $(function () {
        $("#customCheck62").click(function () {
            
            if ($(this).is(":checked")) {
                $("#customInput4").show();
            } else {
                $("#customInput4").hide();
            }
        });
    });

           $(function () {
        $("#customCheck12").click(function () {
            
            if ($(this).is(":checked")) {
                $("#customInput3").show();
            } else {
                $("#customInput3").hide();
            }
        });
    });
           $(function () {
        $("#customCheck6").click(function () {
            
            if ($(this).is(":checked")) {
                $("#customInput2").show();
            } else {
                $("#customInput2").hide();
            }
        });
    });
             $(function () {
        $("#customCheck11").click(function () {
            
            if ($(this).is(":checked")) {
                $("#customInput1").show();
            } else {
                $("#customInput1").hide();
            }
        });
    });

      $("input[name='Fast']").click(function() { 
  $("#otherAnswer").prop("disabled",true);
  if($(this).val() == "Yes") {
      $("#otherAnswer").prop("disabled",false);
  }
  });

      function isNumber(evt) {
               evt = (evt) ? evt : window.event;
               var charCode = (evt.which) ? evt.which : evt.keyCode;
              if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                  alert("Please enter only Numbers.");
                  return false;
                 }

                  return true;
                 }

         function ValidateNo() {
                var phoneNo = document.getElementById('txtPhoneNo');

                    if (phoneNo.value == "" || phoneNo.value == null) {
                      alert("Please enter your Mobile No.");
                        return false;
                        }
                    if (phoneNo.value.length < 10 || phoneNo.value.length > 10) {
                      alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
                       return false;
                        }

                   
                      return true;
                      }
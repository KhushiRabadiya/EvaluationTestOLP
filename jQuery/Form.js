$(document).ready(function() {

  jQuery.validator.addMethod("lettersonly", function(value, element) 
  {
    return this.optional(element) || /^[a-z," "]+$/i.test(value);
  }); 

  jQuery.validator.addMethod("mno", function(value, element) 
  {
    return this.optional(element) || /^[6-9]\d{9}$/i.test(value);
  }); 
  jQuery.validator.addMethod("eml", function(value, element) 
  {
    return this.optional(element) || /^[a-z0-9](\.?[a-z0-9]){3,}@[t][n][t][r][a]\.io$/i.test(value);
  }); 
  
  $("#form").validate({
  rules: {
    name : {
      required: true,
      lettersonly : true
    },
    select1:{
      required:{
        depends: function(element){
          if(0 == $('#select1').val()){
              //Set predefined value to blank.
              $('#select1').val('');
          }
          return true;
        }
      },
    },
    mno:{
      required:true,
      digits:true,
      mno:true,
      rangelength:[10,10]
    },
    mail:{
      required:true,
      eml:true
    },
    gender:{
      required:true
    },
    box11:{
      required:true},
    box22:{
      required:true},
    box33:{
      required:true},
    box44:{
      required:true},
    box55:{
      required:true},
    box66:{
      required:true},
    box77:{
      required:true}
  },
  messages : {
    name: {
      required:"Enter your name, please.",
      lettersonly:"Only characters are allowed"
    },
    select1:{
      required:"Please select your age"
    },
    mno:{
      required:"Enter your Mobile no.",
      mno:"Numbers start with 6 to 9",
      digits:"Only numbers are allowed",
      rangelength:"Only 10 letters are allowed"
    },
    mail:{
      required:"Enter Your Email",
      eml:"Please fill valid email id"
    },
    gender:{
      required:"Please choose your gender"
    },
    box11:{
      required:"Please select"
    },
    box22:{
      required:"Please select"
    },
    box33:{
      required:"Please select"
    },
    box44:{
      required:"Please select"
    },
    box55:{
      required:"Please select"
    },
    box66:{
      required:"Please select"
    },
    box77:{
      required:"Please select"
    }
  },
  errorPlacement: function(error, element) 
  {
    if ( element.is(":radio") ) {
      error.appendTo( element.parents('.radio-container') );
    }else{ // This is the default behavior 
      error.insertAfter( element );
    }}
  });

  $(function(){age123(); 
    function age123(){
      var options = "<option value=' '>"+"Please select your age"+"</option>";
      for(var age = 8 ; age <=25; age++){
        options += "<option value="+age+">"+ age +"</option>";
      }
      $("#select1").html(options);
    }
  });

  $(function(){sun(); 
    function sun(){
      var options = "<option value=''>"+ "Please select" +"</option>";
      for(var box11 = 00 ; box11 <=23; box11++){
        options += "<option value="+box11+":00"+">"+ box11+":00" +"</option>";
      }
      $("#box11").html(options);
      $("#box22").html(options);
      $("#box33").html(options);
      $("#box44").html(options);
      $("#box55").html(options);
      $("#box66").html(options);
      $("#box77").html(options);
      
    }
  });

  //Check box
  $(function() { enable_cb();
    $("#box").click(enable_cb);
  });

  function enable_cb() {
      $(".box").prop("disabled",!this.checked);
      $('.box').prop('checked', false);
      enable_sl1();
      enable_sl2();
      enable_sl3();
      enable_sl4();
      enable_sl5();
      enable_sl6();
      enable_sl7();
      
      $('#box11').prop("checked",false);
      $("#box11").prop("disabled", true);
      $("#box11").val("");

      $('#box22').prop("checked",false);
      $("#box22").prop("disabled", true);
      $("#box22").val("");

      $('#box33').prop("checked",false);
      $("#box33").prop("disabled", true);
      $("#box33").val("");

      $('#box44').prop("checked",false);
      $("#box44").prop("disabled", true);
      $("#box44").val("");

      $('#box55').prop("checked",false);
      $("#box55").prop("disabled", true);
      $("#box55").val("");

      $('#box66').prop("checked",false);
      $("#box66").prop("disabled", true);
      $("#box66").val("");

      $('#box77').prop("checked",false);
      $("#box77").prop("disabled", true);
      $("#box77").val("");

      $('#box11-error').hide();
      $('#box11').removeClass("error");

      $('#box22-error').hide();
      $('#box22').removeClass("error");
      
      $('#box33-error').hide();
      $('#box33').removeClass("error");

      $('#box44-error').hide();
      $('#box44').removeClass("error");

      $('#box55-error').hide();
      $('#box55').removeClass("error");

      $('#box66-error').hide();
      $('#box66').removeClass("error");

      $('#box77-error').hide();
      $('#box77').removeClass("error");
    }

  //Select 1
  $(function() { enable_sl1();
    $("#box1").click(enable_sl1);
  });

  function enable_sl1() {
    $(".box1").prop("disabled", !this.checked);
    $("#box11").val("");
    $('#box11-error').hide();
    $('#box11').removeClass("error");
  }

  //Select 2
  $(function() { enable_sl2();
    $("#box2").click(enable_sl2);
  });

  function enable_sl2() {
    $(".box2").prop("disabled", !this.checked);
    $("#box22").val("");
    $('#box22-error').hide();
    $('#box22').removeClass("error");
  }
  //Select 3
  $(function() { enable_sl3();
    $("#box3").click(enable_sl3);
  });

  function enable_sl3() {
    $(".box3").prop("disabled", !this.checked);
    $("#box33").val("");
    $('#box33-error').hide();
    $('#box33').removeClass("error");
  }
  //Select 4
  $(function() { enable_sl4();
    $("#box4").click(enable_sl4);
  });

  function enable_sl4() {
    $(".box4").prop("disabled", !this.checked);
    $("#box44").val("");
    $('#box44-error').hide();
    $('#box44').removeClass("error");
  }
  //Select 5
  $(function() { enable_sl5();
    $("#box5").click(enable_sl5);
  });

  function enable_sl5() {
    $(".box5").prop("disabled", !this.checked);
    $("#box55").val("");
    $('#box55-error').hide();
    $('#box55').removeClass("error");
  }
  //Select 6
  $(function() { enable_sl6();
    $("#box6").click(enable_sl6);
  });

  function enable_sl6() {
    $(".box6").prop("disabled", !this.checked);
    $("#box66").val("");
    $('#box66-error').hide();
    $('#box66').removeClass("error");
  }
  //Select 7
  $(function() { enable_sl7();
    $("#box7").click(enable_sl7);
  });

  function enable_sl7() {
    $(".box7").prop("disabled", !this.checked);
    $("#box77").val("");
    $('#box55-error').hide();
    $('#box55').removeClass("error");
  }
  
  $(document).on('click','.remCF1',function(){
    $(this).parent().parent().remove();
    $('#myTable tbody tr').each(function(i){            
      $($(this).find('td')[0]).html(i+1);          
    });
  });
  $(document).on('click','.remCF1',function(){
    $(this).parent().parent().update();
    $('#myTable tbody tr').each(function(i){            
      $($(this).find('td')[0]).append(i+": 00");               
    });
  });
  
  //table data display
  $("#result1").html(localStorage.getItem("text1"));
  $("#result2").html(localStorage.getItem("text2"));
  $("#result3").html(localStorage.getItem("text3"));
  $("#result4").html(localStorage.getItem("text4"));
  $("#result5").html(localStorage.getItem("text5"));
  $("#result6").html(localStorage.getItem("text6"));
  $("#result7").html(localStorage.getItem("text7"));
  $("#result8").html(localStorage.getItem("text8"));
  $("#result9").html(localStorage.getItem("text9"));
  $("#result10").html(localStorage.getItem("text10"));
  $("#result11").html(localStorage.getItem("text11"));
  $("#result12").html(localStorage.getItem("text12"));
  $("#result13").html(localStorage.getItem("text13"));

});

//pass values
function passvalues(){
  var name0 = document.getElementById("name").value;
  localStorage.setItem("text1",name0);

  var select10 = document.getElementById("select1").value;
  localStorage.setItem("text2",select10);

  var mno0 = document.getElementById("mno").value;
  localStorage.setItem("text3",mno0);

  var mail0 = document.getElementById("mail").value;
  localStorage.setItem("text4",mail0);

  var gender0=$('input[type="radio"][name = "gender"]:checked').val();
  localStorage.setItem("text5",gender0);

  var box0 = $('input[name = "box"]:checked').val();
  localStorage.setItem("text6",box0);
  
  var box110 = document.getElementById("box11").value;
  localStorage.setItem("text7",box110);

  var box220 = document.getElementById("box22").value;
  localStorage.setItem("text8",box220);
  
  var box330 = document.getElementById("box33").value;
  localStorage.setItem("text9",box330);

  var box440 = document.getElementById("box44").value;
  localStorage.setItem("text10",box440);

  var box550 = document.getElementById("box55").value;
  localStorage.setItem("text11",box550);
  
  var box660 = document.getElementById("box66").value;
  localStorage.setItem("text12",box660);

  var box770 = document.getElementById("box77").value;
  localStorage.setItem("text13",box770);
}

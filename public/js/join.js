


    function open_Postcode(){
      new daum.Postcode({ 
        oncomplete: function(data) { 
     
           document.getElementById('postcode').value = data.zonecode; 
           document.getElementById("road_adress").value = data.roadAddress; 
      } 
    }).open(); 
    } 

    function check_pw(){  //비밀번호 확인 
        var p = document.getElementById('my_pw').value; 
        var p_cf = document.getElementById('my_pwCheck').value; 
     
        if (p!=p_cf) { 
          document.getElementById('pw_check_msg').innerHTML = "비밀번호가 다릅니다. 다시 확인해 주세요."; 
        } 
        else { 
            document.getElementById('pw_check_msg').innerHTML = ""; 
        } 
        if (p_cf=="") { 
          document.getElementById('pw_check_msg').innerHTML = ""; 
        } 
     } 
     

    function checked(){  //form 유효성 검사 
    var p = document.getElementById('my_pw'); 
    var p_cf = document.getElementById('my_pwCheck'); 
    var i = document.getElementById('my_id'); 
     
    var count = 0; 
    var check = document.getElementsByName('my_hobby'); 
    for (var i = 0; i < check.length; i++) {    // 관심분야 검사 
      if (check[i].checked) { 
        count = 1; 
        break; 
      } 
    } 
    if (p.value != p_cf.value) {  //비밀번호 확인 
      alert("비밀번호가 일치하지 않습니다. 확인해주세요"); 
      p_cf.focus(); 
      return false; 
    } 
    if (document.getElementById('postcode').value=="") { //주소 확인 
      alert("주소를 입력해주세요"); 
      document.getElementById('postcode_button').focus(); 
      return false; 
    } 
    if (i.value=="") { //아이디 확인 
      alert("아이디를 입력해주세요"); 
      i.focus(); 
      return false; 
    } 

    if(i.value.length < 4 || i.value > 20){
      alert("아이디는 4~20자로 작성해주세요.")
      i.focus();
      return false;
    }
    
    }



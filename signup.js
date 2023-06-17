function signUp() {
  let ID = document.getElementById('id').value;
  let password = document.getElementById('password').value;
  let passwordCheck = document.getElementById('passwordCheck').value;
  let name = document.getElementById('name').value;
  let telephone = document.getElementById('telephone').value;
  let adress = document.getElementById('adress').value;
  let email = document.getElementById('email').value;
  let agree = document.getElementById('agree').checked;
  let check = true;
  let birthYear = parseInt(document.getElementById('yy').value);
  let birthDay = parseInt(document.getElementById('dd').value);

  // 아이디 확인
  if (ID === '') {
    document.getElementById('idError').innerHTML = '아이디를 입력해 주세요.';
    check = false;
  } else {
    document.getElementById('idError').innerHTML = '';
  }

  // 비밀번호 확인
  if (password !== passwordCheck) {
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('passwordCheckError').innerHTML =
      '비밀번호가 동일하지 않습니다.';
    check = false;
  } else {
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('passwordCheckError').innerHTML = '';
  }

  if (password === '') {
    document.getElementById('passwordError').innerHTML =
      '비밀번호를 입력해주세요.';
    check = false;
  } else {
    //document.getElementById("passwordError").innerHTML=""
  }
  if (passwordCheck === '') {
    document.getElementById('passwordCheckError').innerHTML =
      '비밀번호를 다시 입력해주세요.';
    check = false;
  } else {
    //document.getElementById("passwordCheckError").innerHTML=""
  }

  // 이름확인
  if (name === '') {
    document.getElementById('nameError').innerText = '이름을 입력해 주세요.';
    check = false;
  } else {
    document.getElementById('nameError').innerText = '';
  }

  // 생년월일 확인
  let currentYear = new Date().getFullYear(); // 현재 년도 가져오기

  if (isNaN(birthYear) || birthYear > currentYear) {
    document.getElementById('birth_yError').innerHTML =
      '올바른 년도를 입력해주세요.';
    check = false;
  } else {
    document.getElementById('birth_yError').innerHTML = '';
  }
  if (isNaN(birthDay) || birthDay > 31) {
    document.getElementById('birth_dError').innerHTML =
      '올바른 일을 입력해주세요.';
    check = false;
  } else {
    document.getElementById('birth_dError').innerHTML = '';
  }

  // 전화번호 확인
  if (telephone === '') {
    document.getElementById('telephoneError').innerHTML =
      '전화번호를 입력해 주세요.';
    check = false;
  } else {
    document.getElementById('telephoneError').innerHTML = '';
  }

  // 주소확인
  if (adress === '') {
    document.getElementById('adressError').innerHTML = '주소를 입력해 주세요.';
    check = false;
  } else {
    document.getElementById('adressError').innerHTML = '';
  }

  // 이메일확인
  if (email.includes('@')) {
    let emailId = email.split('@')[0];
    let emailServer = email.split('@')[1];
    if (emailId === '' || emailServer === '') {
      document.getElementById('emailError').innerHTML =
        '이메일이 올바르지 않습니다.';
      check = false;
    } else {
      document.getElementById('emailError').innerHTML = '';
    }
  } else {
    document.getElementById('emailError').innerHTML =
      '이메일이 올바르지 않습니다.';
    check = false;
  }

  // 개인정보활용 동의 체크 확인

  if (!agree) {
    document.getElementById('agreeError').innerHTML =
      '개인정보활용에 동의해주세요.';
  } else {
    document.getElementById('agreeError').innerHTML = '';
  }

  if (check) {
    document.getElementById('idError').innerHTML = '';
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('passwordCheckError').innerHTML = '';
    document.getElementById('telephoneError').innerHTML = '';
    document.getElementById('adressError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('agreeError').innerHTML = '';
    document.getElementById('birth_yError').innerHTML = '';
    document.getElementById('birth_dError').innerHTML = '';

    //비동기 처리이벤트
    setTimeout(function () {
      alert('가입이 완료되었습니다.');
    }, 0);
  }
}

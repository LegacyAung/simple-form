
function getId(id) {
  return document.getElementById(id);
}

function getClassName(classes) {
  return document.getElementsByClassName(classes);
}


let userName = getId('username'),
    email = getId('email'),
    passWord = getId('password'),
    form = getId('form'),

    iconCorrect = getClassName('correct-icon'),
    iconFail = getClassName('fail-icon'),
    errorMsg = getClassName('error');

console.log(iconCorrect);
console.log(errorMsg);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  engine(userName, 0, 'Username');
  engine(email, 1, 'Email');
  engine(passWord, 2, 'Password');
})


function engine(inputId, inputIndex, message) {
  if(inputId.value === '') {
    errorMsg[inputIndex].innerHTML = `${message} needs to be filled`;
    iconFail[inputIndex].style.opacity = '1';
  } else {
    console.log(inputId.value)
    errorMsg[inputIndex].innerHTML = '';
    iconCorrect[inputIndex].style.opacity = '1';
    iconFail[inputIndex].style.opacity = '0';
  };
}

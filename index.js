const goodbye = (name) => {
  return `Z pozdravem <br> ${name}`;
}

const fillSubject = (subject) => {
  document.querySelector('.email__subject').innerHTML = subject;
}

fillSubject('hello!');

const fillBody = (body, name) => {
  document.querySelector('.email__body').innerHTML = body;
  document.querySelector('.email__closing').innerHTML = goodbye(name);
}

fillBody('hkljhsad asdhjkljdfh dsajkl', 'Pavel Ovesný');

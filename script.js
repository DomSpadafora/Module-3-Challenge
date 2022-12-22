const passGen = () => {
    let len = prompt('How long would you like your password to be (8-128)?');
    if(len < 8 || len > 128){
        alert('Password needs to be between 8-128.');
        return passGen();
    };

    let temp='';
    let password='';

    let num = confirm('Would you like your password to have number?');
    if(num) temp+='0123456789';

    let lower = confirm('Would you like your password to have lower case?');
    if(lower) temp+='abcdefghijklmnopqrstuvwxyz';

    let upper = confirm('Would you like your password to have upper case?');
    if(upper) temp+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let special = confirm('Would you like your password to have special characters?');
    if(special) temp+='!$@%_>?<*';


    for (let i = 0; i < len; i++) {
        password+=temp[Math.floor(Math.random()*temp.length)]
    };

    document.querySelector('textarea').innerHTML = password;
};

document.querySelector('button').addEventListener('click', passGen)


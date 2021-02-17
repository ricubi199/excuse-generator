//
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished',
  'during mylunch','while I was praying'];

function excuse_gen(who, action, what, when) {
  let random_num1 = Math.floor(Math.random() * who.length);
  let random_num2 = Math.floor(Math.random() * action.length);
  let random_num3 = Math.floor(Math.random() * what.length);
  let random_num4 = Math.floor(Math.random() * when.length);

  let phrase = who[random_num1] + " " + action[random_num2] + " " +
    what[random_num3] + " " + when[random_num4];

  return phrase;
}

window.onload = function OnLoad () {
  let excuse_id = document.getElementById('excuse');
  excuse_id.innerHTML = excuse_gen(who, action, what, when);
}


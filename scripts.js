question_cycle = 0;

questions = [
  'Você tem certeza que quer continuar?',
  'Você quer namorar comigo?'
]

images = [
  'https://i.pinimg.com/originals/24/6c/be/246cbe84e35e4d96392c5aa5b9aa39fb.jpg',
  'https://i.pinimg.com/736x/3e/d8/be/3ed8be5611f3ddaf9bbbf8259ed03c22.jpg',
  './foto.jpeg'
]

yes_button = document.getElementById('yes');
no_button = document.getElementById('no');
form = document.getElementById('form');
question = document.getElementById('question');
image = document.getElementById('image');
congrats = document.getElementById('congrats');

form_height = 0;
form_width = 0;
no_button_height = 0;
no_button_width = 0;

function default_values() {
  form_height = form.getBoundingClientRect().height;
  form_width = form.getBoundingClientRect().width;
  no_button_height = no_button.offsetHeight;
  no_button_width = no_button.offsetWidth;
  yes_button_width = yes_button.offsetWidth;
  max_width = (form_width / 2) - no_button_width - yes_button_width;
  max_height = form_height - no_button_height;
}


function on_yes() {
  if (question_cycle == 0) {
    question.innerHTML = questions[question_cycle];
    image.src = images[question_cycle];
    if (no_button.hidden) {
      no_button.hidden = false;
    }
    question_cycle = 1;
  }

  else if (question_cycle == 1) {
    question.innerHTML = questions[question_cycle];
    image.src = images[question_cycle];
    if (no_button.hidden) {
      no_button.hidden = false;
    }
    question_cycle = 2;
  }

  else if (question_cycle == 2) {
    question.hidden = true;
    form.remove()
    image.src = images[question_cycle];
    image.style.height = '250px';
    image.style.width = '250px';
    congrats.hidden = false;
  }
}

function on_no() {
  default_values();
  if (question_cycle == 0) {
    no_button.hidden = true;
  }
  else if (question_cycle == 1) {
    no_button.hidden = true;
  }
  else if (question_cycle == 2) {
    rand_width = Math.floor(Math.random() * (max_width - (max_width * -1) + 1) + (max_width * -1))
    rand_height = Math.floor(Math.random() * (max_height + 1));
    console.log(rand_width, rand_height)
    no_button.style.top = rand_height + 'px'
    no_button.style.left = rand_width + 'px'
  }
}



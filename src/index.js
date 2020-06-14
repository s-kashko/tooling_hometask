import Log from './log';
import Message from './message';

import flower from './assets/flower.jpg';
import like from './assets/like.png';
import neuro from './assets/neuro.webp';
import telegram from './assets/telegram.svg';

import './index.css';

document.body.style.textAlign = 'center';

const { log } = new Log();
const { message } = new Message();

log(message('Hello'));
log(message('from'));
log(message('webpack'));
log(message('project!'));

const hello = document.querySelector('.hello');
hello.style.backgroundColor = 'yellowgreen';
hello.style.textAlign = 'center';

const flowerImg = document.createElement('img');
flowerImg.src = flower;
flowerImg.style.width = '100px';

const likeImg = document.createElement('img');
likeImg.src = like;
likeImg.style.width = '100px';

const neuroImg = document.createElement('img');
neuroImg.src = neuro;
neuroImg.style.width = '100px';

const imagesBox = document.createElement('div');
imagesBox.className = 'imagesBox';

imagesBox.append(flowerImg);
imagesBox.append(likeImg);
imagesBox.append(neuroImg);

document.body.append(imagesBox);

const telegramImg = document.createElement('img');
telegramImg.style.width = '200px';
telegramImg.src = telegram;

document.body.append(telegramImg);
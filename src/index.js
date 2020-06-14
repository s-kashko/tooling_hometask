import Log from './log';
import Message from './message';

const { log } = new Log();
const { message } = new Message();

log(message('Hello'));
log(message('from'));
log(message('webpack'));
log(message('project!'));

const hello = document.querySelector('.hello');
hello.style.backgroundColor = 'yellowgreen';
hello.style.textAlign = 'center';
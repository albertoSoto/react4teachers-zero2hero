import '../styles/alternative.scss';

function doLog(msg){
  console.log(msg);
}
let doAnotherLog = function(coolMsg){
  console.log(coolMsg);
}
const test = () => {
  console.log('hello world')
}

doLog('conventional function')
doAnotherLog('not so conventional function')
test()
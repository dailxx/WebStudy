'use strict';

// var fs = require('fs');
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束!");

// fs.readFile('input.txt', (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(data.toString());
// });
// console.log("程序执行结束!");

var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('connect', (arg1, arg2) => {
  console.log('连接成功', arg1, arg2);
  eventEmitter.emit('data_received');
});
eventEmitter.on('data_received', () => {
  console.log('数据接收成功。');
});
eventEmitter.emit('connect', 'arg111', 'arg222');
console.log('程序执行完毕。');

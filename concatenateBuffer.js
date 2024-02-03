var buffer1=Buffer.from('mayur ');
var buffer2=Buffer.from('Dattatry ');
var buffer3=Buffer.from('shelar');
var buffer4=Buffer.concat([buffer1,buffer2,buffer3]);
console.log("buffer3 content are:" +buffer4.toString());
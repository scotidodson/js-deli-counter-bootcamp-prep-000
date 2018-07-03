var katzDeli = [];


function takeANumber(katzDeliLine, name) {
  var lineLength = katzDeliLine.length + 1;
  var greeting = "Welcome, " + `${name}` + ". You are number " + lineLength  + " in line.";
  katzDeliLine.push(name);
  return greeting;
}


function nowServing(katzDeliLine) {
  var lineLength = katzDeliLine.length;
  var zeroGreeting = "There is nobody waiting to be served!";
  var nextGreeting = "Currently serving " + katzDeliLine[0] + ".";
  while(lineLength>0) {
    katzDeliLine.shift(1);
    return nextGreeting;
  }
  while(lineLength===0) {
    return zeroGreeting;
  }
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length;
  var currentLine = [];
  var emptyLine = "The line is currently empty.";
  var lineNumber = []
  while(katzDeliLine.length > lineNumber.length) {
    lineNumber.push(number + katzDeliLine[1]);
    
  }
  var theresALine = "The is currently:" + [katzDeliLine];

  while(lineLength===0) {
    return emptyLine;
  }
}
// returns current line; 
// "The line is currently: 1. Name, 2. Grace"
// "The line is currently empty."
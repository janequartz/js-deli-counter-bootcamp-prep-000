function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
  else return "There is nobody waiting to be served!"
}

function currentLine(line){
  if (line.length > 0){
    
  }
}
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
    let str = "The line is currently: "
    for (let i = 1; i < line.length; i++){
      str += `${i}. ${line[i]}` 
    }
    str += `${line.length}. ${line[line.length]}`
    return str
  }
  else return "The line is currently empty."
}
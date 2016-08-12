var output=[]
for(var i =0;i<strand.length;i++){
  output[strand.length-1-i] = MAPPING[strand[i]]
}
var result = ""
for(var i =0;i<strand.length;i++){
  result+=output[i]
}
console.log(result)

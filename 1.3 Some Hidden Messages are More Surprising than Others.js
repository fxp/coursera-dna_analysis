var output=[]
for(var i =0;i<strand.length;i++){
  output[strand.length-1-i] = MAPPING[strand[i]]
}
var result = ""
for(var i =0;i<strand.length;i++){
  result+=output[i]
}
console.log(result)



function findPattern(text, pattern){
  var founds= [];
  for(var i =0;i<text.length - pattern.length+1;i++){
    if(text.substring(i,i+ pattern.length) == pattern){
      founds.push(i);  
    }
  }
  var result="";
  for(var i =0;i<founds.length;i++){
    result+=founds[i]+" ";
  }
  return result
}

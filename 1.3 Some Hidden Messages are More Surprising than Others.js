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

function fetchAndAnalyze(pattern){
  fetch('https://stepic.org/media/attachments/lessons/3/Vibrio_cholerae.txt', {
  	method: 'get'
  }).then(function(response) {
  	return response.text();
  }).then(function(text) {
    findPattern(text, pattern);
  }).catch(function(err) {
  	// Error :(
  });
}

process.stdin.resume();
process.stdin.setEncoding('utf8');


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

var total = "";
process.stdin.on('data', function(chunk) {
  total +=chunk;
});
process.stdin.on('end', function() {
  var result = findPattern(total, "CTTGATCAT");
  console.log(result);
});

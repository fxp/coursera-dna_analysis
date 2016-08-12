function patternCount(text, pattern){
  var count = 0;
  for(var i =0;i<text.length-pattern.length+1;i++){
    if(text.substring(i,i+pattern.length) == pattern){
      count++;
    }
  }
  return count;
}

function frequentWords(text,k){
  var frequentPatterns = {};
  var counts = [];
  var maxCount = 0;
  for(var i=0;i<text.length-k+1;i++){
    var pattern = text.substring(i,i+k);
    counts[i] = patternCount(text,pattern);
    maxCount = (counts[i]>maxCount)?counts[i]:maxCount;
  }
  for(var i=0;i<text.length-k+1;i++){
    if(counts[i]==maxCount){
      frequentPatterns[text.substring(i,i+k)] = maxCount;
    }
  }  
  return frequentPatterns;
}

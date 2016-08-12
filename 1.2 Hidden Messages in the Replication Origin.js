function patternCount(text, pattern){
  var count = 0;
  for(var i =0;i<text.length-pattern.length+1;i++){
    if(text.substring(i,i+pattern.length) == pattern){
      count++;
    }
  }
  return count;
}

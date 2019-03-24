module.exports = function check(str, bracketsConfig) {
  var strArr = str.split('');
  var brack = bracketsConfig;
  for (var i=0;i<strArr.length;i++){
    for (var j = 0; j < brack.length; j++){
      if(strArr[i] === brack[j][0] && strArr[i+1] === brack[j][1]){
        strArr.splice(i,2);
        if (strArr.length == 0){
        return true;
        }
        i = -1;
      }
    }
  }
  return false;
}

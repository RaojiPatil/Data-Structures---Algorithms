var str = "abc";
var res;
generateSubSequence("abc","");


function generateSubSequence(str, res) {
      if(str.length()==0) {
            console.log((res));
            return
      }
      generateSubSequence(str.substring(1),res)//character is not present[0]
      generateSubSequence(str.substring(1),res+str.charAt(0))//character is present[1]
}

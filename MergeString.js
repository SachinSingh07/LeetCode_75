/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str=""
    let len=word1.length
    let len2=word2.length
    max=Math.max(len,len2)
    
     for(let i=0;i<max;i++)
      {
        if(i<len){
        str+=word1[i]
        }
    
        if(i<len2)
        {
        str+=word2[i]
        }
    
      }
      return str;
    };
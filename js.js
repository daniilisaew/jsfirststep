  let text;
  let regexp;
  let asd;
  let paramA;
  let paramB;  
  text = 'This was hard. \n But I did it. \n And its all.';

     function tel()
     {
       exp = text.toLowerCase();
       return exp;
       //text.toLowerCase();
     }

     function ler() 
      {     
         regexp = /\w/g;  
         asd = exp.match(regexp);
         return asd
         //text.match(regexp);
      }
      function dep() {
       aps = asd.join('');
       return aps 
      }
      function fer() {
        sgg = aps.match(/.{1,5}/g)
        return sgg
      }

      function daf() {
        sgd = sgg.length
        return sgd
      }
      function dek() {
        sgf = aps.match(/.{1,5}/g).join(' ')
        return sgf
      }


        paramA = tel();
        paramB = ler(paramA);
        paramC = dep(paramB);
        paramD = fer(paramC);
        paramE = daf(paramD);
        paramF = dek(paramE);

console.log(paramF);
console.log(paramE);

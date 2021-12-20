
var span=document.getElementById('klokkefin');
function tid(){
   var tid= new Date();
   var H=tid.getHours();
   var M=tid.getMinutes();
   var S=tid.getSeconds();
   klokkefin.textContent = ("0"+H).substr(-2)+ ":" + ("0"+M).substr(-2)+ ":" + ("0"+S).substr(-2);
}
setInterval(tid, 500);

var span =document.getElementById('nedtellin');
function nedtelling(){
   //løkke med t, m ,s
   var t = 10;
   var min= 59;
   var sec= 59;
   while(t>0){
      if (sec!=0){
         sec--;
      }
     if(sec==0){
         min--;
      }
      if(min!=0){
         min--;
      }
    if(min==0){
         t--;
      }

   }

   nedtellin.textContent = ("0"+t).substr(-2) + ("0"+m).substr(-2) + ("0"+s).substr(-2);
}
setInterval(nedtelling, 1000);

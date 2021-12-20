
document.getElementById('klokkefin');
function tid(){
   var tid= new Date();
   var H=tid.getHours();
   var M=tid.getMinutes();
   var S=tid.getSeconds();
   klokkefin.textContent = H + "-" + M + "-" + S;
}
setInterval(tid, 500);

document.getElementById('tellNed');
function nedtelling(){
   //løkke med t, m ,s
   var tiden= new Date;
   var t = 12;
   var min=59;
   int  sec=30;
   while(t>=0){
         sec--;
     if(sec==0){
         min--;
      }
    if(min==0){
         t--;
      }
   }
   tellNed.textContent = t+"-"+min+"-"+sec;
}



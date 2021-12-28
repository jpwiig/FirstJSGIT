
document.getElementById('klokkefin');
function tid(){
   const tid= new Date();
   const H=tid.getHours();
   const M=tid.getMinutes();
   const S=tid.getSeconds();
   klokkefin.textContent = H + "-" + M + "-" + S;
}
setInterval(tid, 500);

document.getElementById('tellNed');
function nedtelling(){
   //løkke med t, m ,s
   let tiden= new Date();
   let t = 0;
   let min=59;
   let sec=30;
   while(t<=0){
    sec--;
     if(sec==0){
         min--;
         sec=59;
      }
    if(min==0){
         t--;
         min=59; 
      }
   }
   tellNed.textContent = t+"-"+min+"-"+sec;
}
setInterval(nedtelling, 1000);



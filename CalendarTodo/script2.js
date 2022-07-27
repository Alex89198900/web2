function update(){
   let tod = document.querySelector('.hour')
   const dateNow = new Date()
   let h= dateNow.getHours()
   if(h<10) h='0'+h;
   tod.children[0].innerHTML=h+':'
 
   let m= dateNow.getMinutes()
   if(m<10) m='0'+m;
   tod.children[1].innerHTML=m+':'
 
  let s= dateNow.getSeconds()
  if(s<10) s='0'+s
   tod.children[2].innerHTML=s;
   
 }
 let timeId
 
 function clockStart(){
   timeId= setInterval(update,1000);
   update()
 }
 
 clockStart()
 
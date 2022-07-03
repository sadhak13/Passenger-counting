//document.getElementById("count-el").innerText= 5


 let CountEl= document.getElementById("count-el")
 count=0
 function increment(){
     count+=1
     CountEl.innerText= count
     console.log(count)
 }

 function save(){
 console.log(count)
 let both=" "+ count + " - "
 saveEl.textContent += both
 CountEl.textContent=0
 count=0
 }
 
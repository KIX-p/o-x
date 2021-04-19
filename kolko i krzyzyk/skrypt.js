var nr = 1
var tab_x = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
var tab_y = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
var koniec
function klik(pole){
   // nr kolumny 
   var nrkol 
   nrkol=(pole-1)%3
   // nr wiersza 
   var  nrwiersza
   nrwiersza=parseInt((pole-1)/3)
   var znak;
    //alert(nrwiersza)
    var idpola='k' + pole // znak k polaczony z pole 


    if(nr%2==1){
         znak = "x"
    }
    else {
     znak = "o"
    }




    if(tab_x[nrwiersza][nrkol]==0 && tab_y[nrwiersza][nrkol]==0){
        document.getElementById(idpola).innerHTML=znak
    }
    else {
        alert('pole zajete')
        return 0
    }




    if(nr%2==1)
    {       
        
        znak = "x"
        tab_x[nrwiersza][nrkol]=1
        console.table(tab_x)
    }
    else
    {
        
        znak = "o"
        tab_y[nrwiersza][nrkol]=1
        console.table(tab_y)
    }
    
    // sprawdzanie wygranej
   //sprawdzamie wierszy 
   var w 
   var k 
   var sumax
   var sumao
   
// sprawdzamy kolumny
   for(k=0;k<3;k++){
       sumax=0
       sumao=0
       for(w=0;w<3;w++){
            sumax=sumax+tab_x[w][k]
            sumao=sumao+tab_y[w][k]
       }
       if(sumao==3){
           alert('O-Wygrana')
           koniec=true
       }
       if(sumax==3){
           alert('X-wygrana')
           koniec=true
       }
   }
   for(w=0;w<3;w++){
    sumax=0
    sumao=0
    for(k=0;k<3;k++){
         sumax=sumax+tab_x[w][k]
         sumao=sumao+tab_y[w][k]
    }
    if(sumao==3){
        alert('O-Wygrana')
        koniec=true
    }
    if(sumax==3){
        alert('X-wygrana')
        koniec=true
    }
    
}
    //przekatna w prawo
    sumax=0
    sumao=0
    for(var p=0;p<3;p++){
        sumax=sumax+tab_x[p][p]
         sumao=sumao+tab_y[p][p]
    }
    if(sumao==3){
        alert('O-Wygrana')
        koniec=true
    }
    if(sumax==3){
        alert('X-wygrana')
        koniec=true
    }
   


    //przekatna w lewo
    sumax=0
    sumao=0
    for(var w=0;w<3;w++){
        sumax=sumax+tab_x[w][k]
        sumao=sumao+tab_y[w][k]
        k--
    }
    if(sumao==3){
        alert('O-Wygrana')
        koniec=true
    }
    if(sumax==3){
        alert('X-wygrana')
        koniec=true
    }
    
    
    nr++
    if(nr==10){
        alert('remis')
        koniec = true
    } 
}

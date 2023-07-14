// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus= document.getElementById("flightStatus");
    let shuttleHeight= Number(document.getElementById("spaceShuttleHeight").innerHTML);
    const landButton= document.getElementById("landing");
    const abortButton= document.getElementById("missionAbort");
    const downB= document.getElementById("down");
    const leftB= document.getElementById("left");
    const rightB= document.getElementById("right");
    const upB= document.getElementById("up");
    const rocketImg= document.getElementById("rocket");
    
    // let top=250;
    // let bottom=10;
    // let left=250;
    // let right=250;
    let top=250;
    let bottom=0;
    let left=250;
    let right=250;
    rocketImg.style.bottom =bottom+'px';
    rocketImg.style.left =left+'px';
    rocketImg.style.right =right+'px'; 
    rocketImg.style.top =top+'px';
  
    takeOffButton.addEventListener("click",function (event) {

        if(confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML= "Shuttle in flight.";   
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
            shuttleHeight += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;
            top -=10;
            
            rocketImg.style.top =top+'px';
        }
    });
       
    landButton.addEventListener("click",function (event) {

        window.alert("The shuttle is landing. Landing gear engaged");

            flightStatus.innerHTML= "Shuttle has landed.";   
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            shuttleHeight = 0;
            document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;

            let top=250;
            let bottom=0;
            let left=250;
            let right=250;
            rocketImg.style.bottom =bottom+'px';
            rocketImg.style.left =left+'px';
            rocketImg.style.right =right+'px'; 
            rocketImg.style.top =top+'px';
        
    });
        
    abortButton.addEventListener("click",function (event) {

        if(confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML= "Mission aborted.";   
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            shuttleHeight = 0;
            document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;

            //back to original place.
            let top=250;
            let bottom=0;
            let left=250;
            let right=250;
            rocketImg.style.bottom =bottom+'px';
            rocketImg.style.left =left+'px';
            rocketImg.style.right =right+'px'; 
            rocketImg.style.top =top+'px';
          
        }
    });
    

    downB.addEventListener("click", function(event){
       
            if(shuttleHeight==0){
                document.getElementById("shuttleBackground").style.backgroundColor = 'green';
                flightStatus.innerHTML= "Shuttle has landed.";   
               
                
                document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;
           
         }else{
            //moving using left spacing
            top+=10;
            rocketImg.style.top =top+'px';
            shuttleHeight-=10000;
            // shuttleHeight -= 10000;
            flightStatus.innerHTML= "Shuttle in flight."; 
            document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;
         }

        
       

    });

    upB.addEventListener("click", function(event){
       
        if(top==0){
           
            flightStatus.innerHTML= "Maximum shuttle height reached.";   
           
            
            document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;
       
     }else{
        document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
        top-=10;
        rocketImg.style.top =top+'px';
        shuttleHeight+=10000;
        flightStatus.innerHTML= "Shuttle in flight"; 
        
        document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;
     }


});

leftB.addEventListener("click", function(event){
       
    if(left==0){
       
        flightStatus.innerHTML= "Maximum left movement reached.";   
       
 }else{
   
    left-=10;
    rocketImg.style.left =left+'px';
    document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;
 }


});

rightB.addEventListener("click", function(event){
       
    if(left==550){
       
        flightStatus.innerHTML= "Maximum right movement reached.";   
       
 }else{
   
    left+=10;
    rocketImg.style.left =left+'px';
    document.getElementById("spaceShuttleHeight").innerHTML=shuttleHeight;
 }


});

}

window.addEventListener("load", init);
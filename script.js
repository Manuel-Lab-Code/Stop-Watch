const Displaytime = document.querySelector("#Displaytime");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");

let startTime=0;
let elapsedTime=0;
let currentTime = 0;
let paused = true;
let interValId;
let hrs= 0;
let mims = 0;
let sec = 0;

startBtn.addEventListener("click", () => {
    if (paused){
        paused=false;
        startTime = Date.now() -elapsedTime;
        interValId=setInterval(upDateTime, 75)
        console.log("Time Start")
    }
})
stopBtn.addEventListener("click", () => {
    if (!paused){
        paused=true;
         Date.now() - startTime;
        clearInterval(interValId);
    }
    console.log("Time Paused")
});
resetBtn.addEventListener("click", () => {
        paused = true;
        let resettime = unUpdate() 
        resettime = "00:00:00";
        resettime = clearInterval(interValId)
        //  hrs= 0;
        //  mims = 0;  
        //  sec = 0;
        //  startTime =0;
        //  currentTime = 0;
  Displaytime.textContent = "00:00:00";
  console.log("Time Reset")
    
      

})
 function unUpdate(){
    elapsedTime = Date.now() * 0;

    // sec = Math.floor(elapsedTime *.000) ;
    // mins = Math.floor(elapsedTime * .000 );
    // hrs= Math.floor(elapsedTime * .000 );

 }
function upDateTime(){
    elapsedTime = Date.now() - startTime

    sec = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs= Math.floor((elapsedTime / (1000 *60 *60) )% 60);

 sec = pad(sec);
 mins = pad(mins);
 hrs= pad(hrs);
 Displaytime.textContent = `${hrs}:${mins}:${sec}`;

    function pad(unite){
        return(("0") + unite).length > 2 ? unite :"0" + unite
    }
}
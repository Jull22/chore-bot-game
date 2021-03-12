let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

const botDoorPath= "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath= "https://content.codecademy.com/projects/chore-door/images/beach.svg"
const spaceDoorPath= "https://content.codecademy.com/projects/chore-door/images/space.svg"

let openDoor1
let openDoor2
let openDoor3
let currentlyPlaying= true;

let closedDoor = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

isClicked = (door) => {
  if (door.src === closedDoor) {
    return false;
  }
  else {
    return true;
  }
}


let numClosedDoors = 3
playDoor = (door) => {
  numClosedDoors --;
  console.log(door.src);
  if (numClosedDoors === 0 && door.src === botDoorPath ) {
    return gameOver("win");
  }
  else if (numClosedDoors > 0 && door.src === botDoorPath)
    
    return gameOver();

}

let startButton = document.querySelector(".start-button");
let currentStreak = 0;
gameOver = (status) => {
  
  if (status === "win"){
    currentStreak++;
    document.querySelector(".current-streak-score").innerText = currentStreak;
  
    startButton.innerText= 'You win! Play again?';

  }
  else {
    startButton.innerText= 'Game Over! Try Again :)';
    currentStreak= 0;
    document.querySelector(".current-streak-score").innerText = currentStreak;
    

    
  }

  let bestStreak = parseInt(document.querySelector(".best-streak-score").innerText);
  if (currentStreak > bestStreak) {
    bestStreak = currentStreak;
    document.querySelector(".best-streak-score").innerText = bestStreak;
  }

  
  currentlyPlaying= false;


}




randomChoreDoorGenerator = () => {
  let choreDoor= Math.floor(Math.random()*3)

  if (choreDoor===0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1){
    openDoor2= botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;

  }

}


doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src=openDoor1;
    playDoor(doorImage1);
  }

  };
doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src=openDoor2;
    playDoor(doorImage2)
    };
}
doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src=openDoor3;
    playDoor(doorImage3)
  };
}



startRound = () => {
  doorImage1.src = closedDoor;
  doorImage2.src = closedDoor;
  doorImage3.src = closedDoor;
  numClosedDoors=3;
  startButton.innerHTML = "Good luck!"
  currentlyPlaying = true;
  randomChoreDoorGenerator();

}


startButton.onclick = () => {
    if (!currentlyPlaying) {
         startRound();
    }
    else {
        alert("Choose the door to open")
    }
}    

randomChoreDoorGenerator()




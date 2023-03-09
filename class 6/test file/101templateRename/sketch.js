/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


let myScore;
function setup(){					
   myScore = 0;
}
function draw(){				
   while(myScore != 9){
      myScore = myScore + 2;
      console.log(myScore);
   }			
}

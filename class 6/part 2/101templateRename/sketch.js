/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors


function setup() {
    // start num at random positive value
    let num = random(20);   
    
    // loop while num is > 0      
    while (num > 0)   {
        console.log("num is:", num );
        
        // subtract two from num 
        num = num - 2;    
    }
    console.log("Leave loop at", num );
}
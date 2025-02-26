import { addAccount } from "./index.js";

// test case 1 
console.log(addAccount(["Tim", "Berners-Lee","tim@w3c.com",25]));

// test case 2
console.log(addAccount(["Alan", "Turing","aturing@w3c.com",58]));

// test case 3
console.log(addAccount(["JM", "POGI","jmpogi@handsoem.com",30]));

// test case 4 (false)
console.log(addAccount(["NEBOY", "", "neboyprime@bm.ultimate",18]));

// test case 5 (false)
console.log(addAccount(["Neboy", "Prime", "fakeeamilhehe", 18]));

// test case 6 (false)
console.log(addAccount(["Neboy", "neboyprime@bm.ultimate", 18]));

// test case 7 (false)
console.log(addAccount(["Neboy", "Prime","neboyprime@bm.ultimate", 17]));
// break keyword 
// continue keyword

// Example of break:
let num = 0;

for (let i = 0; i <= 10; i++) {
  if (num == 4) {
    break; // exits the entire loop immediately
  } else {
    console.log(num);
    num++;
  }
}

// Whenever the 'break' statement executes, the loop stops immediately and control jumps outside the loop.
console.log("All work is done");

// Example of continue:
for (let j = 0; j <= 10; j++) {
  if (j == 4) {
    continue; // skips only this iteration and moves to the next one
  } else {
    console.log(j);
  }
}

// Whenever the 'continue' statement executes, the current iteration is skipped and the loop continues with the next iteration.

const array = [1,2,3,4,5,6];

const spliced = array.splice(0, 2);
/**
 * 1. `splice` will mutate the array 
 * 2. and return the spliced value
 */
console.log({ spliced, array })
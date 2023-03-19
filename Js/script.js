const hamDescription = document.getElementById("hamDescription");

//creating a function which can store multiple parameters for the hamburger options.
function hamOpt(buns, cheese, sauces, toppings, numofPatties, typeofPatty, pickles){
    this.buns = buns;
    this.cheese = cheese;
    this.sauces = sauces;
    this.toppings = toppings;
    this.patties ={
        numofPatties : numofPatties,
        typeofPatty :  typeofPatty
    },
    this.pickles = pickles;

    //creating a description for hambburger
    this.hamDescription = function(){
        
         let hamDescription = `You are having a hamburger with ${buns} bun, ${cheese} which is an original cheese from Canada. This burger has a special ${sauces} sauce along with ${toppings} toppings and ${numofPatties} patty. For the patty it has ${typeofPatty} patty and has ${pickles} as pickle.`;
        
    //returns the burgerDescription
        return hamDescription;
    }
};

    //filling the paramaters with the values
let hamburger = new hamOpt("ciabatta", "Parmesan","mustart", "Chilles, Lettuce", 1, "chicken", "Szechwan");

    //outputs the description of the hamburger to the user
hamDescription.textContent = hamburger.hamDescription();
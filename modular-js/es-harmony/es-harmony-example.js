// module loader API
Loader.load( "http://addyosmani.com/factory/cakes.js", // load from remote source
    function( cakeFactory ){ // once loaded, the library is under cakeFactory
        cakeFactory.oven.makeCupcake( "chocolate" ); // cakeFactory.method...
    });

// Another way to load stuff

// path/to/File.js
export function open(path){};
export function close(hnd) {};

// elsewhere.js
 module file from "path/to/File.js

import {open, close} from file; //note that it is loaded as file
export function scan(in) {
  try {
    var h = open(in);
    // do something
  }
  finally {close(h)}
}

// ES Harmony also has class with constructors, getters, setters
class Cake {
  constructor(name, toppings, price, cakeSize){ // constructor is keyword
    public name = name;
    public cakeSize = cakeSize;
    public toppings = toppings;
    private price = price;
  }

  addTopping(topping){ // note addToping is technically a method, but we don't use the suffix function addTopping(topping){} here.
    public(this).toppings.push(topping);
  }

  get allToppings(){ // getter
    return public(this).toppings;
  }

  get qualifiedForDiscount(){
    return private(this).price > 5;
  }

  set cakeSize(cSize){
    if(cSize < 0){
      throw new Error("Cake must be valid size: small, medium, or large");
    }
    public(this).cakeSize = cSize;
  }
}

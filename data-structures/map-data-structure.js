/*
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-map-data-structure

Let's get some practice creating our own map. 
Because JavaScript objects provide a much more efficient map structure than anything we could write here, 
this is intended primarily as a learning exercise. However, JavaScript objects only provide us with certain operations. 
What if we wanted to define custom operations? Use the Map object provided here as a wrapper around a JavaScript object. 
Create the following methods and operations on the Map object:

    add accepts a key, value pair to add to the map.
    remove accepts a key and removes the associated key, value pair
    get accepts a key and returns the stored value
    has accepts a key and returns true if the key exists or false if it doesn't.
    values returns an array of all the values in the map
    size returns the number of items in the map
    clear empties the map
*/ 
const Map = function() {
    this.collection = {};
    
    this.add = function(key, value){
      this.collection[key] = value;
    };
  
    this.remove = function(key){
      delete this.collection[key];
    };
  
    this.get = function(key){
      return this.collection[key];
    }; 
  
    this.has = function(key){
      const keys = [];
      for(const object in this.collection){
        keys.push(object);
      }
      return keys.includes(key);
    };
  
    this.values = function(){
      const values = [];
      for(const object in this.collection){
        values.push(this.collection[object])
      }
      return values;
    };
  
    this.clear = function(){
      this.collection = {};
    };
  
    this.size = function(){
      const keys = [];
      for(const object in this.collection){
        keys.push(object);
      }
      return keys.length;
    };
};
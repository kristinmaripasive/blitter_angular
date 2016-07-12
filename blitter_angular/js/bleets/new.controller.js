"use strict";

(function(){
  angular
    .module("bleets")
    .controller("BleetNewController", ["BleetFactory", BleetNewControllerFunction])

function BleetNewControllerFunction(BleetFactory){
  console.log("created new bleet");
  this.bleet = new BleetFactory();
  this.create = function(){
    this.bleet.$save()
  }
}

})();

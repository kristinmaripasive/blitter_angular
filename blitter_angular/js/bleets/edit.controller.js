"use strict";

(function(){
  angular
    .module("bleets")
    .controller("BleetEditController", ["BleetFactory", "$stateParams", "$state", BleetEditControllerFunction])

  function BleetEditControllerFunction(BleetFactory, $stateParams, $state){
    console.log($stateParams)
    this.bleet = BleetFactory.get({id: $stateParams.id})
    this.update = function(){
      this.bleet.$update({id: $stateParams.id}).then(function(response){
        $state.go("bleetIndex", ({id: response.id}));
      })
    }
    this.destroy = function(){
      this.bleet.$delete({id: $stateParams.id}).then(function(response){
        $state.go("bleetIndex", ({id: response.id}));
      })
    }
  }
})();

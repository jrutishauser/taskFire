(function () {
	angular.module('taskfire', ['firebase'])
		.controller('TaskController', function($firebase) { 
			var ref = new Firebase('https://taskfire.firebaseio.com/tasklist');	
			var sync = $firebase(ref);	
			this.todoItems = [
				{task:'learn firebase', completed: false},
				{task:'play with angular', completed: true}
			];
			this.addItem = function(){
				this.todoItems.push({text: this.newTodoItem, completed: false});	
			};	
			sync.$set(this.todoItems);	
			console.log(this.todoItems);	
		})






; //end module
})();

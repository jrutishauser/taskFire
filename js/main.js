(function () {
	angular.module('taskfire', ['firebase'])
		.controller('TaskController', function($firebase) { 
			var ref = new Firebase('https://taskfire.firebaseio.com/tasklist');	
			var sync = $firebase(ref);	
			this.todoItems = {};
			this.addItem = function(newTodoItem){
				sync.$push({task: this.newTodoItem, completed: false});	
				this.newTodoItem = "";
					
			};	
			this.todoItems = sync.$asObject();	
		})






; //end module
})();

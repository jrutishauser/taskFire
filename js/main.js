(function () {
	angular.module('taskfire', ['firebase'])
		.controller('TaskController', function($firebase) { 
			var ref = new Firebase('https://taskfire.firebaseio.com/tasklist');	
			var sync = $firebase(ref);	
			this.todoItems = [
			 ];
			 ref.on('value', function(snapshot){
				var remTodoItems = (snapshot.val());
				remTodoItems = remTodoItems.val();
				console.log(remTodoItems.key());
			   	todoItems = remTodoItems;
				console.log(this.todoItems);	
			 });
			this.addItem = function(newTodoItem){
				this.todoItems.push({task: this.newTodoItem, completed: false});	
				sync.$push({task: this.newTodoItem, completed: false});	
				this.newTodoItem = "";
			};	
			// console.log(this.todoItems);	
		})






; //end module
})();

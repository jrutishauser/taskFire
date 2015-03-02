(function () { 
	angular.module('taskfire', ['firebase'])
		.controller('TaskController', function($firebase) { 
			var ref = new Firebase('https://taskfire.firebaseio.com/tasklist');	
				ref.set({
					task: 'learn firebase',
					completed: false 
				});			
			this.todoItems = [
				{task:'learn firebase', completed: false},
				{task:'play with angular', completed: false}
			];	
		
		
		
		
		})






; //end module
})();

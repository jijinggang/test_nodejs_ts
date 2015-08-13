var  events = require('events') ;
export class Event1{
	static test(){
		
		var e = new events.EventEmitter ();
	
		e.on('some_event', function() { 
  			console.log('some_event occured.'); 
		}); 
 
		setTimeout(function() { 
			e.emit('some_event'); 
		}, 2000); 

		
	}
}
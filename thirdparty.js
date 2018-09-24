if(window.indexedDB)
{
    var insert = false;
    
	console.log('IndexDB is supported');

	var req = window.indexedDB.open('sensitivedb', 1);

	req.onupgradeneeded = function(event) {
	  console.log('Malicious idb Upgrading');
		//var db = event.target.result;
		//var objStore = db.createObjectStore('keys', {keyPath: 'id'});
	};

	req.onsuccess = function(event) {
		console.log('Load DB success from malicious script', req.result);

		var keys = [
			{id: 1, name: 'User1', key: 'u1key'},
			{id: 2, name: 'User2', key: 'u2key'},
			{id: 3, name: 'User3', key: 'u3key'}
		];

		var db = event.target.result;

		var transaction = db.transaction('keys', 'readwrite');

		transaction.onsuccess = function(event) {
			console.log('Transaction Done');
		};
		
		transaction.onerror = function(error) {
		    console.log('Transaction failed');  
		};

		var objStore = transaction.objectStore('keys');

        if(insert) 
        {
    		keys.forEach(function(key) {
    			var db_op_req = objStore.add(key);
    			
    			db_op_req.onsuccess = function(event) {
    			    console.log('Add item success');  
    			};
    			
    			db_op_req.onerror = function(error) {
    			    console.log('Add item fail');  
    			};
    		});		
        }
	
		var getReq = objStore.getAll();

		getReq.onsuccess = function(data) {
			console.log('Retrieve data from malicious source', getReq.result);

		};
		
		getReq.onerror = function(error) {
		    console.log('Retrieve data fail');  
		};
		
	};

	req.onerror = function(event) {
		console.log('Load DB fail', req.error);
	};

	
}

var registrationId;
if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log(':^)', reg);


        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(sub) {
           // console.log('endpoint:', sub.endpoint);
             var endpoint=sub.endpoint;

            if (endpoint.substring(0,39)=='https://android.googleapis.com/gcm/send'){
		     var endpointParts = endpoint.split('/');
		     registrationId = endpointParts[(endpointParts.length) - 1];
		    endpoint = 'https://android.googleapis.com/gcm/send';
		}
		else{
			console.log(endpoint.substring(0,39));
		}
			console.log(endpoint.substring(0));
			console.log(registrationId);
            firebase.database().ref('gcmids/'+registrationId).set({
		    "endpoint": endpoint.substring(0),
		    "registrationId": registrationId
		  });
        });

        
    }).catch(function(error) {
        console.log(':^(', error);
    });
}
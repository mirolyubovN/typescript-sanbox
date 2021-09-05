function strip(x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2);
	}
	return x.trim();
}

class MyResponse {
	header: string = 'response header';
	result: string = 'response result';
}

class MyError {
	header: string = 'error header';
	message: string = 'error result';
}

function handle(response: MyResponse | MyError): Object {
	if (response instanceof MyResponse) {
		return {
			info: response.header + response.result
		}
	}
	return {
		info : response.header + response.message
	}
}

// =======

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
	// ...
}

setAlertType('success');
setAlertType('warning');
// setAlertType('default'); - error

var modifiedHeaders = $response.headers;

var modifiedStatus = 'HTTP/1.1 200 OK';

$done({status: modifiedStatus, headers : modifiedHeaders});

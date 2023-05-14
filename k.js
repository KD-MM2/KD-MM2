var obj = JSON.parse($request.body);
obj.k = 0;
$done({body: JSON.stringify(obj)});

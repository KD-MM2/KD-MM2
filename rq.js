const newBody = $request.body;
const newStatus = 'HTTP/1.1 200 OK';

if ($request.body.match(/com.hunt.royale/)) {
  $prefs.setValueForKey("huntroyale", "regrant");
  console.log('triggered huntroyale request');
}


$done({status: newStatus, body: newBody });

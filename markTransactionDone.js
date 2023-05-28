var newBody = $response.body;
const newStatus = 'HTTP/1.1 200 OK';

if ($prefs.valueForKey("regrant") == "huntroyale") {
  newBody =
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <plist version="1.0"> <dict> <key>pings</key> <array> </array> <key>jingleDocType</key> <string>inAppSuccess</string> <key>download-queue-item-count</key> <integer>0</integer> <key>jingleAction</key> <string>inAppTransactionDone</string> <key>dsid</key> <string>16221907643</string> <key>app-list</key> <array> </array> </dict> </plist>';
  console.log('triggered markTransactionDone body');
}


$done({status: newStatus, body: newBody });

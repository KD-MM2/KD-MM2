const body = $request.body;

if ($request.body.match(/com.hunt.royale/)) {
  $prefs.setValueForKey("huntroyale", "regrant");
}

$done({ body });

var obj = JSON.parse($response.body);

obj.entries.JSON_AWAKENING_COST_DATA = `{\"gold\":-5000,\"cards\":-5000,\"epicGems\":-5000,\"dragonGems\":-5000,\"krakenGems\":-5000,\"yetiGems\":-5000}`;
obj.entries.CHECK_MAZE_ITEM = "false";
obj.entries.GAME_CHEAT_HP_DETECTION = "9999999";
obj.entries.GAME_CHECK_EQUIPPED_ITEMS__BAN = "false";
obj.entries.GAME_KRAKEN_REPLACE_DISCONNECTED_PLAYER_WITH_AI = "true";
obj.entries.GAME_CHECK_GEMS_ITEMS__BAN = "false";
obj.entries.PLAYER_TROPHIES_AMOUNT_FOR_AWAKENED_AI = "0";
obj.entries.GAME_DUNGEON_GEMS_DETECTION__BAN = "false";
obj.entries.GAME_CHECK_HUNTER_PERKS = "false";
obj.entries.GAME_CHEAT_DUNGEON_GEMS_DETECTION_WITH_NO_GAMES_2 = "9999999";
obj.entries.GAME_CHEAT_GEMS_DETECTION = "9999999";
obj.entries.GAME_CHEAT_DUNGEON_GEMS_DETECTION_WITH_NO_GAMES = "9999999";
obj.entries.GAME_CHECK_TROPHIES__PROGRESS_VALUE = "9999999";

$done({ body: JSON.stringify(obj) });

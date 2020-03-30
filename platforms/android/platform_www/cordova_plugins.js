cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "MyKadReader.MyKadReader",
      "file": "plugins/MyKadReader/www/MyKadReader.js",
      "pluginId": "MyKadReader",
      "clobbers": [
        "MyKadReader"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "MyKadReader": "0.2"
  };
});
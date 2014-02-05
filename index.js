// chain, chain, chaaaain ...
var Chain = require('sprockets-chain');

var createSprockets = function(config) {
    var sc = new Chain();
    
    var sprocketsPath = [].concat(config.sprocketsPath);
    for (var i = 0, len = sprocketsPath.length; i < len; i++){
        sc.appendPath(config.basePath + '/' + sprocketsPath[i]);
    }
    sc.appendExtensions(".ejs");

    for (var i = config.sprocketsBundles.length -1; i >=0; i--) {
        var expanded = sc.depChain(config.sprocketsBundles[i]);
        for (var j = expanded.length -1; j >=0; j--) {
            config.files.unshift({
                included: true, served: true, watched: false, pattern: expanded[j]
            });
        }
    }
};

createSprockets.$inject = ['config'];

module.exports = {
    'framework:sprockets': ['factory', createSprockets]
};

// chain, chain, chaaaain ...
var Chain = require('sprockets-chain');

var isAbsolutePath = require('path').isAbsolute;
var resolvePath   = require('path').resolve;

var createSprockets = function(config) {
    var sc = new Chain();

    var sprocketsPath = [].concat(config.sprocketsPath);
    for (var i = 0, len = sprocketsPath.length; i < len; i++){
        if (isAbsolutePath(sprocketsPath[i])) {
            sc.appendPath(sprocketsPath[i]);
        } else {
            sc.appendPath(resolvePath(config.basePath, sprocketsPath[i]));
        }
    }
    sc.appendExtensions(".ejs");
    sc.appendExtensions(".jsx");
    sc.appendExtensions(".cjsx");

    for (var i = config.sprocketsBundles.length -1; i >=0; i--) {
        var expanded = sc.depChain(config.sprocketsBundles[i]);
        for (var j = expanded.length -1; j >=0; j--) {
            config.files.unshift({
                included: true, served: true, watched: config.autoWatch, pattern: expanded[j]
            });
        }
    }
};

createSprockets.$inject = ['config'];

module.exports = {
    'framework:sprockets': ['factory', createSprockets]
};

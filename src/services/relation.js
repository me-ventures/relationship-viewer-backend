module.exports = {
    getRelation: getRelations
};


var fs = require('fs');
var config = require("config");
var relationProvider = require('relation-provider');

relationProvider.setLocationProvider("kubernetes", {
    master: config.get('kubernetes-master'),
    caFile: config.get('caFile'),
    auth: {
        type: "token",
        token: fs.readFileSync(config.get('tokenFile'))
    }
});

var relations = relationProvider.getRelations();

setInterval(function(){
    relations = relationProvider.getRelations();
}, 300000);


/**
 * Return all the relations in the system
 */
function getRelations() {
    return relations;
}

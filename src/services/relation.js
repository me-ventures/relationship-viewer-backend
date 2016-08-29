module.exports = {
    getRelation: getRelations
};

var config = require("config");
var relationProvider = require('relation-provider');

relationProvider.setLocationProvider("kubernetes", {
    master: config.get('kubernetes-master')
});


var relations = relationProvider.getRelations();

/**
 * Return all the relations in the system
 */
function getRelations() {
    return relations;
}

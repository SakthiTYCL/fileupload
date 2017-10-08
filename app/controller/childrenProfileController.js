module.exports = function (databaseBS, Sequelize) {
    var childrenProfileModel = require('../module/childrenprofile').ChildrenProfileDetial(databaseBS, Sequelize, "childrenprofiles");
    var childrenProfileServiceObject = require('../service/childrenProfileService')(childrenProfileModel, databaseBS, Sequelize);
    var childrenProfileController = {};

    childrenProfileController.childphoto = function (req, res, next) {
        console.log("controller");
        childrenProfileServiceObject.childphoto(
            req,
            childrenProfileModel,
            Sequelize,
            res);
    };
    return childrenProfileController;
}
module.exports = function (databaseBS, Sequelize) {
    var childrenProfileRouter = require('../controller/childrenProfileController')(databaseBS, Sequelize);
    var ApiRouter = {};
    ApiRouter.apiRouters = function (router) {
        router.post('/photoupload', childrenProfileRouter.childphoto);
    }
    return ApiRouter;
}


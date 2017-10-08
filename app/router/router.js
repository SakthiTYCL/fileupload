module.exports = function (databaseBS, Sequelize) {
    var childrenProfileRouter = require('../controller/childrenProfileController')(databaseBS, Sequelize);
    var ApiRouter = {};
    ApiRouter.apiRouters = function (router) {
        console.log("router");
        router.post('/childphoto', childrenProfileRouter.childphoto);
    }
    return ApiRouter;
}


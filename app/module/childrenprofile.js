module.exports = {
    ChildrenProfileDetial: function (sequelize, Sequelize, modelName) {
        console.log("module");
        var User = sequelize.define('logins', {
            user_name: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            }
        });
        return User;
    }
}

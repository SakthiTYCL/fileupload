var multer = require("multer");
var md5 = require('md5');
module.exports = function (testmodel, databaseBS, Sequelize) {
    var childrenProfileModel = require('../module/childrenprofile').ChildrenProfileDetial(databaseBS, Sequelize, "childrenprofiles");
    var childrenProfileService = {};
    childrenProfileService.childphoto = function (req, testmodel, Sequelize, res) {
        var imgfilename = null;
        var storage = multer.diskStorage({ //multers disk storage settings
            destination: function (req, file, cb, res) {
                cb(null, './uploads/profile_photo')
            },
            filename: function (req, file, cb, res) {
                var datetimestamp = Date.now();
                imgfilename = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
                cb(null, imgfilename)
            }
        });
        var upload = multer({ //multer settings
            storage: storage
        }).single('file');
        upload(req, res, function (err) {
            if (err) {
                res.json({ error_code: 1, err_desc: err });
                return;
            }
            // res.json({ error_code: 0, err_desc: imgfilename });
            console.log(imgfilename);
            res.send(imgfilename);
        })
    }
    return childrenProfileService;
}
module.exports.index = function (application, req, res) {
    var banksModel = new application.src.models.banks();

    banksModel.getAllBanks(function (err, result) {
        res.render("banks/index", { banks : result });
    });
}
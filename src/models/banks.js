var fs = require('fs');

function banks() { }

banks.prototype.getAllBanks = function (callback) {
    fs.readFile('./data/bancos.json', 'utf8', function (err, result) {
        var data = [];
        if (!err) {
            var obj = JSON.parse(result);
            console.log(result);
            obj.forEach(function (bancos) {
                if (i >= 0) {
                    data[i] = bancos;
                    i--;
                }
            });
        }
        callback(err, data);
    });
};

module.exports = function () {
    return banks;
}

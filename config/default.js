const path = require('path')

module.exports = {
    __appName: 'Monitory_software',
    __localAbsolutePath: function () {
        return path.dirname(__dirname)
    },
    __deployAbsolutePath: function() {
        return process.env.ProgramData.concat(path.sep, this.__appName)
    },
    __localZipPath: function(){
        return path.join(this.__localAbsolutePath(),'assets/build.zip')
    }

}
const adminZip = require('adm-zip');
const path = require('path')


const __mainDir = path.dirname(__dirname).split(path.sep).slice(0,-1).join(path.sep)

async function zipFolder(folderPath) {
    return new Promise((resolve, reject) => {
        try {
            const zip = new adminZip();
            // Compacta a pasta inteira e seu conteúdo
            zip.addLocalFolder(folderPath);
            zip.writeZip(path.join(__mainDir, 'assets/build.zip'));
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

(async function() {
    try {
        await zipFolder(path.join(__mainDir,'build'));
        console.log('Folder added to zip successfully');
    } catch (err) {
        console.error(err);
    }
})();


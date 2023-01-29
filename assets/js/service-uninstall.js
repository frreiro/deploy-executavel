const { exec } = require('child_process');

//TODO: externalizar nome dos diretórios
const _appDir = '\\Monitory_software'
const _fullPath = process.env.ProgramData + _appDir

function uninstallService(){
    return new Promise((resolve, reject) => {
        try{
            exec(`cd ${_fullPath} && cmd.exe /c service-uninstall.bat`, { }, (e, stdout) => {
                if(e) console.log('Deu erro')
                console.log(stdout)
            })
            resolve();
        }catch(err) {
            reject(err)
        }
    })
}

uninstallService();
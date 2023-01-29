const fs = require('fs');
const path = require('path')
const adminZip = require('adm-zip');
const { exec } = require('child_process');


//TODO: externalizar nome dos diretórios

const _appDir = '\\Monitory_software'
const _fullPath = process.env.ProgramData + _appDir

// Caminho relativo dentro do executável
const __mainDir = path.dirname(__dirname).split(path.sep).slice(0,-1).join(path.sep)
const zipPath = path.join(__mainDir, 'assets/build.zip')
const zip = new adminZip(zipPath)


async function createFolders(){
    return await fs.promises.mkdir(_fullPath, { recursive: true} , err => {
        if(err) console.log('Erro na criação de pastas', err)
        console.log('Criado as pastas')
            extractZip();
            installService();
    })
}


async function extractZip(){
    return new Promise((resolve, reject) => {
        zip.extractAllToAsync(_fullPath, true, false, (err) => {
            if(err) {
                console.log(err)
                reject(err);
            }
            resolve();
        })

    })
}

function installService(){
    return new Promise((resolve, reject) => {
        try{
            exec(`cd ${_fullPath} && cmd.exe /c service-install.exe`, { }, (e, stdout) => {
                if(e) console.log('Deu erro')
                console.log(stdout)
            })
            resolve();
        }catch(err) {
            reject(err)
        }
    })
}


//TODOS: Fazer verificaçoes
if(process.env.ProgramData){
    initDescompres()
}


async function initDescompres(){
    await createFolders();
    await extractZip();
    await installService();
}

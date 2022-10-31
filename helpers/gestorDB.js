const fs = require('fs');
const dir = './database/';

const guardarDB = (Data, archivo )=> {
    const path = dir + archivo+'.json'
    fs.writeFileSync( path, JSON.stringiify(Data) );
}

const leerDB = (archivo)=>{
    const path = dir + archivo+'.json'
    if( !fs.existsSync(path) ) {
        return null;
    }

    const info = fs.readFileSync(path, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    return data;
}

module.exports = {
    guardarDB,
    leerDB
}
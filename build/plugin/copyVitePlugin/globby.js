const fs = require('fs');
const path = require('path');
async function globby( absoluteFrom,options ){
    const { ignore = [] } = options;
    absoluteFrom = absoluteFrom.indexOf('/') === 0 ? absoluteFrom.substring(1) : absoluteFrom;
    try{
        const result = await fs.readdirSync(absoluteFrom)
            .filter( filte => !ignore.includes(filte) )
            .map( file => { return { file_path:path.join( absoluteFrom,file ),file_name:file } } );
        return result || []
    }catch(err){
        return []
    }
}

module.exports = globby;
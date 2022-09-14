const fs = require('fs');


const deleteFiles = (filePath)=>{
    fs.unlink(filePath, (err)=>{
        if(err){
            throw(err);
        }
    })
}

exports.deleteFiles = deleteFiles;
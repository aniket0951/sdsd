function isWDS(string){

    return string === 'WDS'
}

function isNumber(number){
    return Number.isInteger(number)
}

module.exports = isWDS , isNumber
exports.elementExist = (element) => {
    if (!!element) {
        const message = `l'element existe`
        return {message, element}
    } else{
        const message = `l'element n'existe pas`
        return {message}
    }
}

exports.dateNow = () =>{
    return new Date().toLocaleString()
}
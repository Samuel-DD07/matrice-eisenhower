exports.elementExist = (element) => {
    if (!!element) {
        const message = `l'element existe`
        return {message, element}
    } else{
        const message = `l'element n'existe pas`
        return {message}
    }
}

exports.tabIsEmpty = (tab) => {
    if (tab.length > 0){
        const message = `l'element existe`
        return {message, tab}
    } else {
        const message = `l'element n'existe pas`
        return {message}
    }
}

exports.dateNow = () =>{
    return new Date().toLocaleString()
}
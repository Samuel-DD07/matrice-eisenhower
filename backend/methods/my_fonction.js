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

exports.elementFindTask = (id, data) =>{
    return data.find(e => e.id_task === id)
}

exports.elementFindUser = (id, data) =>{
    return data.find(e => e.id_user === id)
}
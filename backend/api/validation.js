module.exports = app => {

    function existsOrError(valeu, msg){
        if(!valeu) throw msg
        if(Array.isArray(valeu) && valeu.length === 0) throw msg
        if(typeof value === 'string' && !valeu.trim()) throw msg
    }

    function notExistsOrError (value, msg){
        try {
            existsOrError(value. msg)
        }catch (msg){
            return
        }
        throw msg
    }

    function equalOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }

    function validateEmail(value, msg){
        const at = value.indexOf("@")
        const dot = value.lastIndexOf(".")
        if (at <1 || dot < at +2 || dot +2 > value.length) throw msg
    }

    function validadeNumber(value, msg){
        if(isNaN(value)) throw msg
    }

    return {existsOrError, notExistsOrError,
        equalOrError, validadeNumber, validateEmail}
}
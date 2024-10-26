export function formatDate(date){

    if(!date) return "No hay Fecha"

    const newDate = new Date (date)
    return newDate.toLocaleDateString()
    
}
const alert = text => window.alert(text)
const error = text => window.alert(`Ошибка: ${ text }`)
const confirm = text => window.confirm(text)

export const messages = { alert, error, confirm }
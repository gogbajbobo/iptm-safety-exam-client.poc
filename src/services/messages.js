const alert = text => window.alert(text)
const error = text => window.alert(`Ошибка: ${ text }`)

export const messages = { alert, error }
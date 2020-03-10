const isProduction = process.env.NODE_ENV === 'production'

const isAdmin = user => user.roles.includes('admin')

export default { isProduction, isAdmin }

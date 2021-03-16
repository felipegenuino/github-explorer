type User = {
    name: string
    email: string
    address: {
        city: String
        state?: string
    }
}

function showWellcomeMessage(user: User) {
    return `Wellcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`
}

showWellcomeMessage({
    name: 'Felipe',
    email: 'design@felipegenuino.com',
    address: {
        city: 'São José',
        state: 'SC'
    }
})
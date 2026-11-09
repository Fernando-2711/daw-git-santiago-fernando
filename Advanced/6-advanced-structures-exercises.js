// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.filter(x => x % 2 === 0).map(x => x ** 3).reduce((acc, curr) => acc + curr, 0)
numbers.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.push(curr ** 3)
    }
    return acc
}, [])

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo
//  y filtra sólo los números pares
const cubedEvenNumbers = numbers.map(x => x ** 3).filter(x => x % 2 === 0)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
numbers.flatMap(x => [x, x ** 2])

// 4. Ordena un array de números de mayor a menor
numbers.sort((a, b) => b - a)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const set1 = new Set([1, 2, 3, 4, 5])
const set2 = new Set([4, 5, 6, 7, 8])
const union = new Set([...set1, ...set2])
const intersection = new Set([...set1].filter(x => set2.has(x)))
const difference = new Set([...set1].filter(x => !set2.has(x)))

// 6. Itera los resultados del ejercicio anterior
union.forEach(x => console.log(x))
intersection.forEach(x => console.log(x))
difference.forEach(x => console.log(x))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const userMap = new Map()
userMap.set('user1', { name: 'Alice', age: 30, email: 'alice@example.com' })
userMap.set('user2', { name: 'Bob', age: 25, email: 'bob@example.com' })
userMap.set('user3', { name: 'Charlie', age: 35, email: 'charlie@example.com' })

userMap.forEach((user, key) => {
    console.log(`User: ${key}`)
    console.log(`Name: ${user.name}`)
    console.log(`Age: ${user.age}`)
    console.log(`Email: ${user.email}`)
})

// 8. Dado el mapa anterior, crea un array con los nombres
const names = Array.from(userMap.values()).map(user => user.name)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emailsOfAdults = Array.from(userMap.values())
    .filter(user => user.age >= 18)
    .map(user => user.email)
const emailsOfAdultsSet = new Set(emailsOfAdults)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada
//  usuario y como valor todos los datos del usuario
const userObject = Object.fromEntries(userMap)
const emailUserMap = new Map(Object.entries(userObject).map(([key, value]) => [value.email, value]))
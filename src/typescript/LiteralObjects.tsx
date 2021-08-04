interface Person {
    name: string,
    age: number,
    address: Address
}

interface Address {
    name: string,
    city: string
}

export const LiteralObjects = () => {

    const person: Person = {
        name: 'Oscar',
        age: 31,
        address: {
            name: 'casa',
            city: 'Lima'
        }
    }

    return (
        <div>
            <>
                <h3>Objeto Literal</h3>
                <code>
                    <pre>
                        { JSON.stringify(person, null, 2) }
                    </pre>
                </code>
            </>
        </div>
    )
}

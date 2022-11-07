type GreetProps = {
    name: string
    surname: string
    city: string
    state: string
    zip: string
    phone: string
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.surname}</h1>
            <h1>{props.city}</h1>
            <h1>{props.state}</h1>
            <h1>{props.zip}</h1>
            <h1>{props.phone}</h1>
        </div>
    )
}
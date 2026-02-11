import { useResource } from "./resource.hook";
import { useUser } from "./user.hook";

export const UserInfo = ({userId}) => {
    // const user = useUser(userId)
    const user = useResource(`/users/${userId}`)
    const { name, age, country, books } = user || {};

    return user ? (
        <>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h2>Boooks</h2>
            <ul>
                {books.map(book => <li key={book}>{book}</li>)}
            </ul>
        </>
    ) : (
        <h1>Loading...</h1>
    )
}
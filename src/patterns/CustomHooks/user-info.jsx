import { useCallback } from "react";
import { axiosInstance } from "../../data/axiosInstance";
import { useDataResource } from "./data-source.hook";

const fetchFromServer = (resourceUrl) => async () => {
    const response = await axiosInstance.get(resourceUrl);
    return response.data;
}

const fetchFromLocalStorage = (key) => () => {
    const value = localStorage.getItem(key);
    return value;
}

export const UserInfo = ({userId}) => {
    const fetchUser = useCallback(fetchFromServer(`/users/${userId}`), [userId])
    const user = useDataResource(fetchUser)
    const message = useDataResource(fetchFromLocalStorage("test"))
    const { name, age, country, books } = user || {};

    return user ? (
        <>
            <p>{message || "no message"}</p>
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
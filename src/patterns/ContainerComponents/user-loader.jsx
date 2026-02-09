import React, { useEffect, useState } from "react"
import { axiosInstance } from "../../data/axiosInstance";

export const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axiosInstance.get(`/users/${userId}`)
            console.log(userId)
            console.log(response)
            setUser(response.data)
        })()
    }, [userId])

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }
                return child
            })}
        </>
    )
}
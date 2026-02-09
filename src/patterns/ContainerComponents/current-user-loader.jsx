import React, { useEffect, useState } from "react"
import { axiosInstance } from "../../data/axiosInstance";

export const CurrentUserLoader = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axiosInstance.get("/current-user")
            setUser(response.data)
        })()
    }, [])

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
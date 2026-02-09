import React, { useEffect, useState } from "react"
import { axiosInstance } from "../../data/axiosInstance";

export const DataSource = ({ getData = () => {}, resourceName, children }) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await getData()
            setResource(data)
        })()
    }, [getData])

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: resource })
                }
                return child
            })}
        </>
    )
}
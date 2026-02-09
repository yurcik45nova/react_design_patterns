import React, { useEffect, useState } from "react"
import { axiosInstance } from "../../data/axiosInstance";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axiosInstance.get(resourceUrl)
            setResource(response.data)
        })()
    }, [resourceUrl])

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
import React, { useEffect, useState } from "react"
import { axiosInstance } from "../../data/axiosInstance";

export const DataSourceWithRender = ({ getData = () => {}, render }) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await getData()
            setResource(data)
        })()
    }, [getData])

    return render(resource)
}
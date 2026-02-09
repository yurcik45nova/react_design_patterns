import { UserInfo } from "./user-info"
import { DataSource } from "./data-source"
import { axiosInstance } from "../../data/axiosInstance"

const getDataFromServer = async (url) => {
    const response = await axiosInstance.get(url)
    return response.data
}

export const ContainerComponentsImplementations = () => {
    return (
        <>
            <DataSource
                getData={() => getDataFromServer("/users/3")}
                resourceName={"user"}
            >
                <UserInfo />
            </DataSource>
        </>
    )
}
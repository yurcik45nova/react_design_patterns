import { UserInfo } from "./user-info"
import { DataSource } from "./data-source"
import { axiosInstance } from "../../data/axiosInstance"
import { DataSourceWithRender } from "./data-source-with-render"

const getDataFromServer = async (url) => {
    const response = await axiosInstance.get(url)
    return response.data
}

export const ContainerComponentsImplementations = () => {
    return (
        <>
            <DataSourceWithRender
                getData={() => getDataFromServer("/users/3")}
                render={(resource) => <UserInfo user={resource} />}
            >
            </DataSourceWithRender>
        </>
    )
}
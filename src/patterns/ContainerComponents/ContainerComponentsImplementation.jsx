import { UserInfo } from "./user-info"
import { DataSource } from "./data-source"
import { axiosInstance } from "../../data/axiosInstance"
import { DataSourceWithRender } from "./data-source-with-render"

const getDataFromServer = async (url) => {
    const response = await axiosInstance.get(url)
    return response.data
}
 
const getDataFromLocalStorage = key => () => {
    return localStorage.getItem(key)
}

const Message = ({msg}) => <h1>{msg}</h1>

export const ContainerComponentsImplementations = () => {
    return (
        <>
            <DataSourceWithRender
                getData={() => getDataFromServer("/users/3")}
                render={(resource) => <UserInfo user={resource} />}
            />

            <DataSource
                getData={() => getDataFromLocalStorage("test")}
                resourceName={"msg"}
                >
                    <Message />
            </DataSource>
        </>
    )
}
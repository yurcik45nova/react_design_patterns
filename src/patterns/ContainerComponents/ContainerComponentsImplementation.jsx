import { UserInfo } from "./user-info"
import { UserLoader } from "./user-loader"

export const ContainerComponentsImplementations = () => {
    return (
        <UserLoader userId={3}>
            <UserInfo />
        </UserLoader>
    )
}
import { CurrentUserLoader } from "./current-user-loader"
import { UserInfo } from "./user-info"

export const ContainerComponentsImplementations = () => {
    return (
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
    )
}
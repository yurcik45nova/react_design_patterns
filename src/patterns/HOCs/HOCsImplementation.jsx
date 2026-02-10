import { logProps } from "./log-props"
import { UserInfo } from "../ContainerComponents/user-info"
import { includeUser } from "./include-user"


const UserInfoWithLoaderWrapper = includeUser(UserInfo, "3")

export const HOCsImplementation = () => {
  return (
    <>
      <UserInfoWithLoaderWrapper />
    </>
  )
}
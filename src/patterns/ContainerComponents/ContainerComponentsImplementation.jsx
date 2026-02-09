import { ResourceLoader } from "./resource-loader"
import { UserInfo } from "./user-info"
import { BookInfo } from "./book-info"

export const ContainerComponentsImplementations = () => {
    return (
        <>
            <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
                <UserInfo />
            </ResourceLoader>
            
            <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
                <BookInfo />
            </ResourceLoader>
        </>
    )
}
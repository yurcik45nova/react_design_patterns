import { RegularList } from "./Lists/lists/Regular"
import { authors } from "../../data/authors"
import { books } from "../../data/books"
import { SmallAuthorListItem } from "./Lists/authors/SmallListItems"
import { LargeAuthorListItem } from "./Lists/authors/LargeLIstItems"
import { SmallBookListItem } from "./Lists/books/SmallListItems"
import { LargeBookListItem } from "./Lists/books/LargeLIstItems"


export const ListComponentsImplementation = () => {
    return (
        <>
            <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
            <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
            <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem} />
            <RegularList items={books} sourceName={"book"} ItemComponent={LargeBookListItem} />
        </>
    )
}
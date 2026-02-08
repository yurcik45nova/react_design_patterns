export const LargeBookListItem = ({book}) => {
    const { name, price, title, pages } = book;

    return (
        <>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Title: {title}</p>
            <h2># of Pages: {pages}</h2>
        </>
    )
}
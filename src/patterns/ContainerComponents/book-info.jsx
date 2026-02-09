export const BookInfo = ({book}) => {
    const { name, price, title, pages } = book || {};

    return book ? (
        <>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Title: {title}</p>
            <h2># of Pages: {pages}</h2>
        </>
    ) : (
        <h1>Loading...</h1>
    )
}
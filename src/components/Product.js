const Product = (props) => {
    const {brand, thumbnail, title, price, rating, id} = props?.resdata;
    return (
        <div className="card">
            <h3> {brand}</h3>
            <div className="image-holder">
                <img src={thumbnail} title={title} alt={title} />
            </div>
            <div className="salary">
                Product Name: {title}
            </div>
            <div className="degree">
                Price: ${price}
            </div>
            <div className="rating">
                Rating: {rating}
            </div>
            <div className="position">
                ID: {id}
            </div>
        </div>
    )
}

export default Product;
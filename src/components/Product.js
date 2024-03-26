const Product = (props) => {
    const {brand, thumbnail, title, price, rating, id} = props?.resdata;
    return (
        <div className="p-4 m-4 w-52 bg-gray-200 hover:bg-gray-300 hover:transition-all cursor-pointer">
            <h3 className="font-bold"> {brand}</h3>
            <div className="image-holder">
                <img className="w-full max-h-44 min-h-44 my-2" src={thumbnail} title={title} alt={title} />
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

// Example of higher order component in React
export const withHighRating = (Product) => {
    return(props) => {
        return (
            <div className="relative">
                <label className="absolute bg-black text-white p-1 rounded-lg mt-[-20px] ml-2">
                    Highly Rated Phone
                </label>
                <Product {...props}></Product>
            </div>
        )
    }
}

export default Product;
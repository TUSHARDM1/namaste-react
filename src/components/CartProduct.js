const CartProduct = (props) => {
    const {name, id, image, cuisine} = props?.resdata;
    return (
        <div className="p-4 m-4 w-52 bg-gray-200 hover:bg-gray-300 hover:transition-all cursor-pointer">
            <h3 className="font-bold"> {name}</h3>
            <div className="image-holder">
                <img className="w-full max-h-44 min-h-44 my-2" src={image} title={name} alt={name} />
            </div>
            <div className="salary">
                CartProduct Name: {name}
            </div>
            <div className="degree">
                Cuisine: {cuisine}
            </div>
            <div className="position">
                ID: {id}
            </div>
        </div>
    )
}
export default CartProduct;
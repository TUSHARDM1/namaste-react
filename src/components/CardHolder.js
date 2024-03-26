const cardStyle = {
    backgroundColor: '#fafafa'
}

const CardHolder = (props) => {
    return (
        <div className="m-4 p-4 w-[200px]" style={cardStyle}>
            <h3>{props.name}</h3>
            <div className="image-holder">
                 <img className="w-full" src="https://media.licdn.com/dms/image/C5603AQFNk_HtT3corA/profile-displayphoto-shrink_800_800/0/1517499093383?e=2147483647&v=beta&t=MKWT6e0VU7heX9J5yT5A-t04_p4mjr1cWyfLCE0De10" alt="Teacher" />
            </div>
            <div className="skills">
                {props.skills}
            </div>
            <div className="degree">
                MCA
            </div>
            <div className="position">
                Technical Lead
            </div>
        </div>
    )
}

export default CardHolder;
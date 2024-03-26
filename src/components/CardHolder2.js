const cardStyle = {
    backgroundColor: '#fafafa'
}

const CardHolderV2 = (props) => {
    const {employee_name, profile_image, employee_salary, employee_age, id} = props?.resdata;
    return (
        <div className="p-4 m-4 w-52 rounded-lg border-solid border-gray-500" style={cardStyle}>
            <h3 className="font-bold my-2"> {employee_name}</h3>
            <div className="image-holder">
                <img className="w-full border border-solid" src={profile_image} alt="Teacher" />
            </div>
            <div className="salary">
                Salary: {employee_salary} INR
            </div>
            <div className="degree">
                Age: {employee_age}
            </div>
            <div className="position">
                ID: {id}
            </div>
        </div>
    )
}

export default CardHolderV2;
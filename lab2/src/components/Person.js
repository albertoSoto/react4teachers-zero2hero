//import PropTypes from "prop-types";
function Person(props) {
    return (
        <div>
            <p> Name: {props.name} </p>
            <p>EyeColor: {props.eyeColor}</p>
            <p>Age : {props.age} </p>
            <hr/>
        </div>
    )
}
Person.defaultProps = {
    name: "Super Lopez",
    eyeColor: "deepblue",
    age: 45
}
/*Person.propTypes = {
    name: PropTypes.string,
    eyeColor: PropTypes.string,
    age: PropTypes.number,
};
"prop-types": "^15.8.1",
*/
export default Person;
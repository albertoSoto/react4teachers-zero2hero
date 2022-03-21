function Greeting(props) {
    let msg =  <>Hello, Stranger.</>
    if (props.user) {
        msg = <h1>Hello, {props.user}!</h1>;
    }
    return msg;
}
export default Greeting;
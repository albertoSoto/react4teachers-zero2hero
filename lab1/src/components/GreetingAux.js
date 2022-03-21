export function GreetingAux(props) {
    let msg =  <>Hello, Stranger.</>
    if (props.user) {
        msg = <h1>Hello, {props.user}!</h1>;
    }
    return msg;
}
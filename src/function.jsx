// With a JSX compiler, you can transform JSX expressions to calls to React.createElement.
function Custom() {

}
export function Reveal() {
    // localStorage is an object, so values are stored by key name
    // data from localStorage is always stored in strings
    // values at each key are stringified objects in JSON format, we must parse them
    var data = JSON.parse(localStorage.getItem('user-info'));
    alert('Your are currently registered with ' + data.email);
}
export default Custom
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Protected(props) {
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push('./register');
        }
    })
    const history = useHistory();
    let Cmp = props.Cmp;
    return (
        <div>
            <Cmp ></Cmp>
        </div>
    )
}
export default Protected
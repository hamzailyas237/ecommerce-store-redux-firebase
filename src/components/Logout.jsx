
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { auth } from '../firebase/Firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
    const logout = (e) => {
        e.preventDefault()

        signOut(auth).then(() => {
            localStorage.removeItem('uid')
            navigate('/')
        })
        .catch((error) => {
            alert(error)
            console.log(error);
        });
    }
    return (
        <>


            {/* <div style={{ marginRight: '80px' }}>
                <SplitButton variant="none" drop="down" title="">
                    <Dropdown.Item eventKey="1" onClick={logout}>Logout</Dropdown.Item>
                </SplitButton>

            </div> */}

            <div>
                <p onClick={logout}>Logout</p>
            </div>
        </>
    );
}

export default Logout;
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

const HeaderToInicio = () => {
    const history = useHistory();

    
  const redirectToInicio = () => {
    history.push("/")
}
  
  return (<>
    <Navbar bg="primary" variant="dark">
        <Button variant="outline-light" onClick={redirectToInicio}>Inicio</Button>
    </Navbar>
    </>
  )
}

export default HeaderToInicio;
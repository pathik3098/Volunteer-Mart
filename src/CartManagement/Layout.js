import {Container} from 'react-bootstrap';

export const Layout = (props) =>{

    return(
        <Container fluid = 'md'> 
            {props.children}
        </Container>
    );

}
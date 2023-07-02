import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Meals from '../../assets/images/revimeals.png'
import {  faReact } from '@fortawesome/free-brands-svg-icons'

const OrderApp = () => {
  return (
    <Card style={{ width: '18rem' }} className="styleme">
      <a
        href="https://github.com/Revinianz13/Dummy-Ordering-App-React/blob/main/README.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card.Img variant="top" src={Meals} >
        </Card.Img>
        
      </a>
      <br />
      <Card.Body>
      <br />
        <Card.Title className="text">Order App</Card.Title>
        <Card.Text className="text2">
          This is a project for a fictional restaurant.<br /> It was created with:
          <FontAwesomeIcon icon={faReact}  alt="react" />.
        </Card.Text>
        <Button
          variant="primary"
          href="https://github.com/Revinianz13/Dummy-Ordering-App-React/blob/main/README.md"
          className="text3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sneak Peek
        </Button>
      </Card.Body>
    </Card>
  )
}
export default OrderApp;
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './index.scss'
import Lemmon from '../../assets/images/lemon.svg'
import { faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Little = () => {
  return (
    <Card style={{ width: '18rem' }} className="styleme">
      <a
        href="https://restaurant-bf5c5.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card.Img variant="top" src={Lemmon} />
        
      </a>
      <br />
      <Card.Body>
      <br />
        <Card.Title className="text">Little Lemmon</Card.Title>
        <Card.Text className="text2">
          This is a project for a fictional restaurant.<br /> It was created with:
          <FontAwesomeIcon icon={faReact}  alt="react" /> and{' '}
          <FontAwesomeIcon icon={faBootstrap} alt="bootstrap" />
          .
          <br />
          Its fully responsive as it was builded with the Mobile First Aproach.
        </Card.Text>
        <Button
          variant="primary"
          href="https://restaurant-bf5c5.web.app/"
          className="text3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Little

import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Projects(){
  return (
    <React.Fragment>
      <h1>Look at my github!</h1>
      <Col className="d-flex">
          <Card className="flex-fill" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px181" />
          <Card.Body>
            <Card.Title>Help Queue</Card.Title>
            <Card.Text>
              A help ticket queue using React that stores tickets in a firebase database.
            </Card.Text>
            <Button variant="primary" onClick={(e) => {
              e.preventDefault();
              window.location.href='https://github.com/alexiusvdt/help-queue-hooks'
              }}>github link
            </Button>
          </Card.Body>
        </Card>
        <Card className="flex-fill" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>To Do List 2</Card.Title>
            <Card.Text>
              An ASP.NET to do list application that stores entries in a SQL database.
            </Card.Text>
            <Button variant="primary" onClick={(e) => {
                e.preventDefault();
                window.location.href='https://github.com/alexiusvdt/ToDoList-Styled'
                }}>github link
              </Button>
          </Card.Body>
        </Card>

        <Card className="flex-fill" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">github link</Button>
          </Card.Body>
        </Card>
        <Card className="flex-fill" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Project 4</Card.Title>
            <Card.Text>
              Yadda yadda should be in the same row as project #1 hope it works
            </Card.Text>
            <Button variant="primary">github link</Button>
          </Card.Body>
        </Card>
        </Col>
    </React.Fragment>
  );
}

export default Projects
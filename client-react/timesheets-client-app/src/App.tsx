import Message from './components/Message';
import ListGroup from './components/ListGroup';

function App(){

  const items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
        'San Antonio',
        'San Diego'
    ]

  return (<div>
    <ListGroup heading="Test!" items={items}/>
  </div>)
}

export default App;
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="http://laps78.github.io" className="btn btn-primary">Go developer's Page</a>
        </div>
      </Card>
      <Card>
        <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
          className="card-img-top"
          alt="react"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="http://laps78.github.io" className="btn btn-primary">Go developer's Page</a>
        </div>
      </Card>
    </div>
  );
}

export default App;

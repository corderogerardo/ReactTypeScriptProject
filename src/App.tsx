import React, {Component} from 'react';
import './App.css';
import Link from './components/link/Link';
import Textarea from './components/Textarea';
import Button from './components/Button'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>No office location</h1>
                    <h5>We will be back as soon as per2osible.</h5>
                    <Link />
                    <Textarea />
                    <Button />
                </header>                 
            </div>
        );
    }
}

export default App;

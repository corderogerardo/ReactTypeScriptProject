import React, {Component} from 'react';
import appStyles from './App.module.scss';

class App extends Component {
    state = { language: 'english'};
    render() {
        return (
            <div className={appStyles.app}>
                <header className={appStyles.header}>
                    <div className="ui container">
                        <h1>No office location</h1>
                        <h5>We will be back as soon as posible.</h5>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;

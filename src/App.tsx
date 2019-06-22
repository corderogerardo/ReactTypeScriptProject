import React, {useState, useEffect} from 'react';
import appStyles from './App.module.scss';

const App = () => {
  const [data, updateData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json()
        );
      updateData(result);
    };
    fetchData();
  }, []);
  return (
    <div className={appStyles.app}>
      <header className={appStyles.header}>
        <div className="ui container">
          <h1>No office location</h1>
          <h5>We will be back as soon as posible. </h5>
        </div>
      </header>
      <section>
        {data.map((info:any, index:number) => (<div key={info.id}>{info.title}</div>))}
      </section>
    </div>
  );
};

export default App;

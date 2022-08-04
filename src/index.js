import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export const App = (
  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <div>
        <h3>Bob Doe</h3>
        <h4>📞 03.49.79.52.46</h4>
        <button>Delete</button>
        <h3>Jane Meyers</h3>
        <h4>📞 02.56.38.50.10</h4>
        <button>Delete</button>
        <h3>Marc Jones</h3>
        <h4>📞 04.89.73.92.89</h4>
        <button>Delete</button>
        <h3> John Archer</h3>
        <h4>📞 02.82.47.55.96</h4>
        <button>Delete</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
var React = require("react");

var About = props => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p className="text-center">
        Did you find the weather? Great! Simple right? It's magical and is
        accurate by TWO decimal places! EXPELLIARMUS!
      </p>
      <h5>This was built with:</h5>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>: JavaScript
          framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>: was
          responsible for finding you the weather!
        </li>
      </ul>
    </div>
  );
};

module.exports = About;

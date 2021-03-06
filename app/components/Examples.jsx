var React = require("react");
var { Link } = require("react-router");

var Examples = props => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p className="text-center">Try out some of these cities!</p>
      <dl className="text-center">
        <dd>
          <Link to="/?location=Monaco">Monaco, France</Link>
        </dd>
        <dd>
          <Link to="/?location=Tokyo">Tokyo, Japan</Link>
        </dd>
      </dl>
    </div>
  );
};

module.exports = Examples;

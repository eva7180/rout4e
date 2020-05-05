import React from "react";

const Route = ({ path, component: Component }) =>
  window.location.pathname === path ? <Component /> : null;

const Link = ({ children, to }) => (
  <div>
    <a href={to}>{children}</a>
  </div>
);

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <div>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </>
  );
}

const Home = () => <div>This is Home</div>;

const About = () => <div>This is About me</div>;

const Contact = () => <div>This is Contact me</div>;

export default App;

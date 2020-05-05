import React from "react";

const Route = ({ path, component: Component }) =>
  window.location.pathname === path ? <Component /> : null;

function App() {
  return (
    <>
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a href="/about">About</a>
      </div>
      <div>
        <a href="/contact">Contact</a>
      </div>
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

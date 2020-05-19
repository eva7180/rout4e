import React, { useContext } from "react";

const PathContext = React.createContext();

const Route = ({ path, component: Component }) => {
  const { path: currentPath } = useContext(PathContext);
  return currentPath === path ? <Component /> : null;
};

const Link = ({ children, to }) => {
  const { setPath } = useContext(PathContext);

  return (
    <div>
      <a
        href={to}
        onClick={(e) => {
          e.preventDefault();
          setPath(to);
        }}
      >
        {children}
      </a>
    </div>
  );
};

const BrowserRouter = ({ children }) => {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    window.history.pushState(null, null, path);
  }, [path]);

  return (
    <PathContext.Provider value={{ path, setPath }}>
      {children}
    </PathContext.Provider>
  );
};

// ----------------

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <div>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

const Home = () => <div>This is Home</div>;

const About = () => <div>This is About me</div>;

const Contact = () => <div>This is Contact me</div>;

export default App;

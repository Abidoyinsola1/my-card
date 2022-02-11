import Header from "./Header";
import About from "./About";
import Interest from "./Interest";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <About />
        <Interest />
      </div>
    </div>
  );
}

export default App;

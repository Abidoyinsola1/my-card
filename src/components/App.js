import Header from "./Header";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;

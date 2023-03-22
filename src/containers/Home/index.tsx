import Navbar from '../components/Navbar';
import "./styles.scss";
import Search from './Search';
import Jobs from "./Jobs";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Jobs />
      <Footer />
    </div>
  );
}

export default Home;

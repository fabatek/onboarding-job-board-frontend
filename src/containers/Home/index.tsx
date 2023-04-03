import "./styles.scss";
import Search from './Search';
import Jobs from "./Jobs";

function Home() {
  return (
    <div className="App">
      <Search />
      <Jobs />
    </div>
  );
}

export default Home;

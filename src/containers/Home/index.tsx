import "./styles.scss";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ShowAllJobs from "../../components/ShowAllJobs/ShowAllJobs";
function Home() {
  return (
    <div className="App">
      <header data-testid="header">
        <Header/>
      </header>
      <main className="home__body">
        <nav data-testid="navbar">
        <Navbar/>
        </nav>
        <div data-testid="show-all-jobs">
        <ShowAllJobs/>
        </div>
      </main>
    </div>
  );
}
export default Home;

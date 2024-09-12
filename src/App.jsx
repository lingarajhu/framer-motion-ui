import "./App.css";
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";
import Card3d from "./components/Card3d";
import DropMenu from "./components/DropMenu";
import CardDragger from "./components/CardDragger";
import Grid from "./components/Grid";
import AurorHero from "./components/AuroraHero";

function App() {
  return (
    <>
      <AurorHero />
      <Card3d />
      <NavBar />
      <DropMenu />
      <CardDragger />
      <Grid />
      <TodoList />
    </>
  );
}

export default App;

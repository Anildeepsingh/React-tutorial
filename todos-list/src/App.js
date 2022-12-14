import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { TodoItem } from "./MyComponents/TodoItem";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
  return (
    <>
      <Header title="My Todos List" />
      <Todos />
      <Footer />
    </>
  );
}

export default App;

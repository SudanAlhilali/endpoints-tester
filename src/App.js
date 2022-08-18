import "./App.css";
import Home from "./components/Home";
import DataProvider from "./Context/DataProvider";
function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;

import FilterComponent from "./components/filterData/filterComponent";

function App() {
   
  const data = ["dummy Data 1", "dummy Data 2","dummy Data 3","dummy Data 4","dummy Data 5"]

  return (
    <>
      <FilterComponent data={data}/>   
    </>
  );
}

export default App;

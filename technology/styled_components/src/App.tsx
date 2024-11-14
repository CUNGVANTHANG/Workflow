import Card from "./components/Card/Card"
import CardList from "./components/Card/CardList"

function App() {
  
  return <div style={{backgroundColor: "#eee", height: "100vh"}}>
      <CardList>
        <Card />
        <Card />
        <Card />
      </CardList>
  </div>
}

export default App

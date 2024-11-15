import Card from "./components/Card/Card"
import CardList from "./components/Card/CardList"
import { GlobalStyles } from "./GlobalStyles"

function App() {
  
  return <div style={{backgroundColor: "#eee", height: "100vh"}}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card />
        <Card />
        <Card />
      </CardList>
  </div>
}

export default App

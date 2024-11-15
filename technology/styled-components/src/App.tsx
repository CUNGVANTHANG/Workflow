import Card from "./components/Card/Card"
import CardList from "./components/Card/CardList"
import { GlobalStyles } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#0070f3",
  },
}

function App() {
  
  return <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card />
        <Card />
        <Card />
      </CardList>
  </ThemeProvider>
}

export default App

import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CartContextProvider } from "./hooks/useCart"
import { Router } from "./routes"
import { GlobalStyle } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/theme"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

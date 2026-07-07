import Header from "./components/header"
import Footer from "./components/footer"
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App

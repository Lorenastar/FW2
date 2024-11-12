import { Container } from "react-bootstrap"
import Footer from "./components/footer"
import Menu from "./components/navbar"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }
   
  export default function Page({ repo }) {
    return (
      <main>
        <Menu/>
        <Container>
            
        </Container>
        <Footer/>
        <p>{repo.stargazers_count}</p>
      </main>
    )
  }
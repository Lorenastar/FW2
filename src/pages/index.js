import Menu from "./components/navbar";
import Footer from "./components/footer";
import {Container} from 'react-bootstrap';

export default function Index() {
  return <>
  <Menu /> 
  <Container className="conteudo">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci non beatae aperiam laudantium, quod omnis ad delectus id excepturi quos eius temporibus voluptate distinctio mollitia porro! Animi dicta dolor eius.</p>
    <p>Nobis sapiente beatae eos aliquid facere cupiditate officiis, minus, voluptatem at odit ea dignissimos! Voluptatem, tenetur nemo non consectetur et obcaecati! Quasi pariatur iure facere dolores, enim aliquid temporibus impedit!</p>
    <p>Laudantium similique deleniti saepe praesentium id commodi voluptates quam porro mollitia non, sequi eius dolore vel libero quis optio rem necessitatibus cupiditate repudiandae. Neque doloremque animi porro nobis, at consectetur.</p>
  </Container>
  <Footer />
  </>
}

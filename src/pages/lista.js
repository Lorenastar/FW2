import { Accordion, Container } from 'react-bootstrap';
import Menu from './components/navbar';
import Footer from './components/footer';

export default function lista() {
    var noticias = [
        {
            id: 1,
            titulo: "Avanços na Tecnologia de IA",
            conteudo: "A tecnologia de inteligência artificial tem avançado rapidamente, com novos modelos sendo desenvolvidos para diversas aplicações, desde assistência virtual até diagnósticos médicos."
        },
        {
            id: 2,
            titulo: "Mudanças Climáticas Aumentam",
            conteudo: "Estudos recentes mostram que as mudanças climáticas estão se intensificando, com impactos significativos nos ecossistemas e na saúde humana."
        },
        {
            id: 3,
            titulo: "Lançamento de Novo Smartphone",
            conteudo: "Uma grande empresa de tecnologia anunciou o lançamento de seu mais novo smartphone, que promete inovações em design e desempenho."
        }
    ]


    return (
        <>
            <Menu />
            <Container>
                <Accordion>
                    {noticias.map(noticia =>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{noticia.titulo}</Accordion.Header>
                            <Accordion.Body>
                                {noticia.conteudo}
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Container>
            <Footer />
        </>
    );
}


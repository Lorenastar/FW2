import {Container} from "react-bootstrap"
import style from "@/styles/Footer.module.css"
export default function Footer() {
    return <>
    <Container>
        <footer className={`${style.degradeFooter} position-button bottom-0 start-50 px-3 text-dark rounded border border-2 border-primary`}>
            <ul className="nav justify-content-center border-bottom pb-1 mb-2 ">
                <li className="nav-item">Disciplina de FrameWorks2</li>
            </ul>
            <p className="text-center ">&copy; 2024 IFMS</p>
        </footer>
    </Container>
    </>
}

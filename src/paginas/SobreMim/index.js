import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/estefane_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Estefane!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto da Estefane sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Desenvolvedora Front-end.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou com uma pós graduação de Engenharia de Software, em seguida dei seguimento ingressando no curso de Análise e Desenvolvimento de Sistemas e sigo sempre buscando novos conhecimentos e aprendizado constante.
            </p>

            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com desenvolvimentos de projetos freelance.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. 
            </p>
        </PostModelo>
    )
}
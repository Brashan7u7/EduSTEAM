import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.headerContent}>
      <div>
        <img
          src="fondo.jpg"
          class="img-fluid rounded-top"
          alt=""
        />
        <p>
        Alrededor del año 2009 surgió en Estados Unidos un nuevo concepto de la educación, cuyo objetivo era que ésta se orientara al campo científico-tecnológico. 
          De esta manera surgió la educación STEM, que representa el acrónimo en inglés para referirse a los nombres de cuatro materias o disciplinas académicas que son: Science, Technology, Engineering y Mathematics que en nuestro contexto corresponden a: Ciencias Naturales (o simplemente ciencias), Tecnología, Ingeniería y Matemáticas
          que en español podría traducirse como CTIM, o bien como un dato curioso MINT por sus siglas en alemán para Mathematik, Informatik, Naturwissenschaft y Technik. 
          Es preciso mencionar que este acrónimo ya había comenzado a utilizarse a finales de los años 90 por la Fundación Nacional para la Ciencia de Estados Unidos, o NSF por 
          sus siglas en inglés para National Science Foundation. Si bien es cierto que ya se referían a este grupo de palabras como STEM, su esencia no tenía alguna implicación 
          interdisciplinaria o conexiones entre los campos ya que simplemente se limitaba a agrupar estos campos del conocimiento (la ciencia o la tecnología o la ingeniería o las matemáticas).
        </p>
      </div>
    </div>
  );
}

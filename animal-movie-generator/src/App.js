import { useState, useRef } from "react";
import axios from "axios";
import Form from "./components/Form";
import MovieCard from "./components/MovieCard";
import MoviesList from "./components/MoviesSection";
import Modal from "./components/Modal";

export default function App() {
  const [animalString, setAnimalString] = useState(null);
  const [movies, setMovies] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const currentAnimalUrl = `url('/${animalString}.svg'), url('/${animalString}.svg')`;

  function getAnimalId(keyword) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/keyword?api_key=19c1732f3fd1fbaa0320b2839709698a&query=${keyword}`
      )
      .then((response) => {
        const animalId = response.data.results[0].id;
        getMoviesFromId(animalId);
        setAnimalString(response.data.results[0].name);
      })
      .catch((error) => console.log(error));
  }

  function getMoviesFromId(keywordId) {
    axios
      .get(
        `https://api.themoviedb.org/3/keyword/${keywordId}/movies?api_key=19c1732f3fd1fbaa0320b2839709698a`
      )
      .then((response) => {
        setMovies(response.data.results);
        scrollToMovies();
      })
      .catch((error) => console.log(error));
  }

  const moviesList = movies?.map((movie) => (
    <li className="movie" key={movie.id}>
      <MovieCard movie={movie} animalString={animalString}></MovieCard>
    </li>
  ));

  const moviesSection = useRef(null);

  const scrollToMovies = () => {
    setTimeout(
      () =>
        window.scrollTo({
          top: moviesSection.current.offsetTop,
          left: 0,
          behavior: "smooth",
        }),
      50
    );
  };

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const buttonText = "The Noun Project Icon Attributions";

  const credits = (
    <ul>
      <li>Alligator by Yu luck from the Noun Project</li>
      <li>Gorilla face by Icons Producer from the Noun Project (ape)</li>
      <li>Bat by Maxim Kulikov from the Noun Project</li>
      <li>Beaver by Iconic from the Noun Project</li>
      <li>bee by Syaiful Amri from the Noun Project</li>
      <li>Bird by Chanut is Industries from the Noun Project</li>
      <li>buffalo by Iconic from the Noun Project</li>
      <li>Butterfly by BGBOXXX Design from the Noun Project</li>
      <li>Camel by IYIKON from the Noun Project</li>
      <li>Cat by bmijnlieff from the Noun Project</li>
      <li>Chicken by BomSymbols from the Noun Project</li>
      <li>Cow by Maxicons from the Noun Project</li>
      <li>Deer by supalerk laipawat from the Noun Project</li>
      <li>Dog by Iconic from the Noun Project</li>
      <li>Dolphin by Iconic from the Noun Project</li>
      <li>Duck by jauhari from the Noun Project</li>
      <li>Eagle by tulpahn from the Noun Project</li>
      <li>elephant face by Icons Producer from the Noun Project</li>
      <li>Fish by b farias from the Noun Project</li>
      <li>Fox by tulpahn from the Noun Project</li>
      <li>Frog by Icons Producer from the Noun Project</li>
      <li>Giraffe by monkik from the Noun Project</li>
      <li>Goose by H Alberto Gongora from the Noun Project</li>
      <li>Bear by ArmOkay from the Noun Project (grizzly)</li>
      <li>Hamster by Martin LEBRETON from the Noun Project</li>
      <li>Horse by Iconic from the Noun Project</li>
      <li>Kangaroo by Template from the Noun Project</li>
      <li>Leopard by Anniken & Andreas from the Noun Project</li>
      <li>Lion by Iconic from the Noun Project</li>
      <li>lizard by ArmOkay from the Noun Project</li>
      <li>monkey by Nociconist from the Noun Project (chimpanzee)</li>
      <li>Mouse by Anthony Bossard from the Noun Project</li>
      <li>Panda by Nook Fulloption from the Noun Project</li>
      <li>Penguin by iconixar from the Noun Project</li>
      <li>Pig by Luiz Carvalho from the Noun Project</li>
      <li>puma by Lars Meiertoberens from the Noun Project</li>
      <li>Rabbit by wira wianda from the Noun Project</li>
      <li>Racoon by Ahmad Nursalim from the Noun Project</li>
      <li>Shark by Pham Duy Phuong Hung from the Noun Project</li>
      <li>Sheep by Dmitry Mirolyubov from the Noun Project</li>
      <li>Skunk by Georgiana Ionescu from the Noun Project</li>
      <li>Snake by Icons Producer from the Noun Project</li>
      <li>Spider by Ayub Irawan from the Noun Project</li>
      <li>Swan by Bernd Lakenbrink from the Noun Project</li>
      <li>Tiger by Iconic from the Noun Project</li>
      <li>turtle by Ian Rahmadi Kurniawan from the Noun Project</li>
      <li>Whale by priyanka from the Noun Project</li>
      <li>Wolf by priyanka from the Noun Project</li>
    </ul>
  );

  return (
    <>
      <main>
        <section className="intro">
          <div className="inner">
            <h1>Animal Movie Generator</h1>
            <p>
              My job is to help you find new things to watch starring your
              favourite furry, feathered, or scaley Hollywood&nbsp;stars.
            </p>
          </div>
        </section>

        <Form getAnimalId={getAnimalId}></Form>

        <section id="contentWrapper" ref={moviesSection}>
          {movies ? (
            <MoviesList
              moviesList={moviesList}
              currentAnimalUrl={currentAnimalUrl}
            />
          ) : null}
        </section>
      </main>

      <footer id="siteFooter" role="contentinfo" className="site-footer">
        <div className="footer-links">
          <p>
            Built by&nbsp;
            <a href="https://laurasalgado.com" target="_blank" rel="noreferrer">
              Laura Salgado
            </a>
          </p>
          <p>
            Data:&nbsp;
            <a
              href="https://www.themoviedb.org/documentation/api"
              target="_blank"
              rel="noreferrer"
            >
              themoviedb.org API
            </a>
          </p>

          <Modal
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
            modalContent={credits}
            buttonText={buttonText}
          />
        </div>
      </footer>
    </>
  );
}

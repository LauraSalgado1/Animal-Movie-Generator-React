import { useState, useRef } from "react";
import axios from "axios";

export default function App() {
  const [animalString, setAnimalString] = useState(null);
  const [movies, setMovies] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
      <a
        href={`https://www.google.com/search?q=${movie.title}`}
        target="_blank"
        rel="noreferrer"
      >
        {movie.poster_path ? (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="500"
              height="750"
              loading="lazy"
            />
          </>
        ) : (
          <img
            src={`/${animalString}.svg`}
            alt={movie.title}
            width="500"
            height="750"
            loading="lazy"
          />
        )}

        <div className="writeup">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      </a>
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
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <main>
        <section className="intro">
          <div className="inner">
            <h1>Animal Movie Generator</h1>
            <p>
              My job is to help you find new things to watch, starring all of
              your favourite furry, feathered, or scaley Hollywood&nbsp;stars.
            </p>
          </div>
        </section>

        <form action="">
          <label htmlFor="animal">Select a movie star: </label>

          <select
            name="animal"
            id="animal"
            onChange={(e) => getAnimalId(e.target.value)}
          >
            <option value="" selected disabled>
              Animals
            </option>
            <option value="alligator">Alligator</option>
            <option value="ape">Ape</option>
            <option value="bat">Bat</option>
            <option value="beaver">Beaver</option>
            <option value="bird">Bird</option>
            <option value="buffalo">Buffalo</option>
            <option value="butterfly">Butterfly</option>
            <option value="cat">Cat</option>
            <option value="chicken">Chicken</option>
            <option value="chimpanzee">Chimpanzee</option>
            <option value="cow">Cow</option>
            <option value="deer">Deer</option>
            <option value="dog">Dog</option>
            <option value="dolphin">Dolphin</option>
            <option value="duck">Duck</option>
            <option value="eagle">Eagle</option>
            <option value="elephant">Elephant</option>
            <option value="fish">Fish</option>
            <option value="fox">Fox</option>
            <option value="giraffe">Giraffe</option>
            <option value="goose">Goose</option>
            <option value="grizzly">Grizzly</option>
            <option value="hamster">Hamster</option>
            <option value="horse">Horse</option>
            <option value="kangaroo">Kangaroo</option>
            <option value="leopard">Leopard</option>
            <option value="lion">Lion</option>
            <option value="lizard">Lizard</option>
            <option value="mouse">Mouse</option>
            <option value="panda">Panda</option>
            <option value="penguin">Penguin</option>
            <option value="pig">Pig</option>
            <option value="puma">Puma</option>
            <option value="rabbit">Rabbit</option>
            <option value="raccoon">Raccoon</option>
            <option value="shark">Shark</option>
            <option value="sheep">Sheep</option>
            <option value="skunk">Skunk</option>
            <option value="snake">Snake</option>
            <option value="spider">Spider</option>
            <option value="swan">Swan</option>
            <option value="tiger">Tiger</option>
            <option value="turtle">Turtle</option>
            <option value="whale">Whale</option>
            <option value="wolf">Wolf</option>
          </select>
        </form>

        <section id="contentWrapper" ref={moviesSection}>
          {movies ? (
            <>
              <div
                className="content-area"
                id="contentArea"
                style={{
                  backgroundImage: currentAnimalUrl,
                }}
              >
                <ul id="container" className="movies-list">
                  {moviesList}
                </ul>
              </div>
            </>
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
            Data: &nbsp;
            <a
              href="https://www.themoviedb.org/documentation/api"
              target="_blank"
              rel="noreferrer"
            >
              themoviedb.org API
            </a>
          </p>
          <button
            className="modal-button"
            id="modalButton"
            onClick={openModal}
            aria-controls="modal"
            aria-expanded={modalOpen}
          >
            The Noun Project Icon Attributions
          </button>

          {modalOpen ? (
            <>
              <div className="modal" id="modal" onClick={closeModal}>
                <div className="icon-credits">
                  <button className="close" onClick={closeModal}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 352 512"
                    >
                      <title>Close</title>
                      <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                    </svg>
                    <span className="screen-reader-text">Close</span>
                  </button>
                  <ul>
                    <li>Alligator by Yu luck from the Noun Project</li>
                    <li>
                      Gorilla face by Icons Producer from the Noun Project (ape)
                    </li>
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
                    <li>
                      elephant face by Icons Producer from the Noun Project
                    </li>
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
                    <li>
                      monkey by Nociconist from the Noun Project (chimpanzee)
                    </li>
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
                    <li>
                      turtle by Ian Rahmadi Kurniawan from the Noun Project
                    </li>
                    <li>Whale by priyanka from the Noun Project</li>
                    <li>Wolf by priyanka from the Noun Project</li>
                  </ul>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </footer>
    </>
  );
}

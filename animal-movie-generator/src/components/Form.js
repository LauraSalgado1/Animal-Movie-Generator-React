import React from "react";

const Form = ({ getAnimalId }) => {
  return (
    <>
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
    </>
  );
};

export default Form;

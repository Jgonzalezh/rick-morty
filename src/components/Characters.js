

export default function Characters(props) {
    const {characters} = props;

    return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home">Volver home</span>
      <div  className="container-characters">
        {characters.map((characters, index ) => (
            <div className="character-container" key={index}>
                <p>{characters.name}</p>
                </div>
        ))}
      </div>
    </div>

  );
}

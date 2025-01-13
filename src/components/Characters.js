

export default function Characters(props) {
    const {characters, setCharacters} = props;
    const restCharacters = () => {
        setCharacters(null);
    };

    return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={restCharacters}>Volver home</span>
      <div  className="container-characters">
        {characters.map((character, index ) => (
            <div className="character-container" key={index}>
                <div><img src={character.images} alt={character.name}/>
                    </div>
                <div>
                    <h3>{character.name}</h3>
                    <h6>
                        {character.status === "Alive" ? (
                            <>
                            <span className="alive"/>
                            </>
                        ): (
                            <>
                            <span className="dead"/>
                            </>
                        )                  
                        }
                        </h6>
                    <p>
                        <span className="text-grey">Episodios: </span>
                        <span>{character.episode.lenght}</span>
                    </p>
                    <p>
                    <span className="text-grey">Especie: </span>   
                    <span>{character.species}</span> 
                    </p>
                    </div>
                </div>
        ))}
      </div>
      <span className="back-home" onClick={restCharacters}>Volver home</span>
    </div>

  );
}

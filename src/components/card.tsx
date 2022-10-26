export function Card({ character }: { character: any }) {
    return (
        <li className="character col">
            <div className="card character__card">
                <img
                    src="img/no-one.jpg"
                    alt="Nombre y familia del personaje"
                    className="character__picture card-img-top"
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {character.name}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li>{character.age}</li>
                            <li>
                                Estado:
                                <i className="fas fa-thumbs-down"></i>
                                <i className="fas fa-thumbs-up"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="character__overlay">
                        <ul className="list-unstyled"></ul>
                        <div className="character__actions">
                            <button className="character__action btn">
                                {character.message}
                            </button>
                            <button className="character__action btn">
                                {character.isAlive}
                            </button>
                        </div>
                    </div>
                </div>
                <i className="emoji"></i>
            </div>
        </li>
    );
}

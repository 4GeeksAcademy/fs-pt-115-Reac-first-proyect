const Personajes = ({rol, funciones, clases, imagen}) => {
    return (
        <div className="card col-md-4 col-sm-12 " style={{}}>
            <img src={imagen} className="card-img-top" alt="Personaje" />
            <div className="card-body">
                <h5 className="card-title">{rol}</h5>
                <p className="card-text">{funciones}</p>
                <button className="btn btn-primary">{clases}</button>
            </div>
        </div>
    );
}

export default Personajes;

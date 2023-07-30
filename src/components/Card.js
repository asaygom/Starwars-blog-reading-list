function Card(props){
    return (
    <div className="card" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.gender}</p>
            <p className="card-text">{props.homeworld}</p>
            <a href="#" className="btn btn-primary">Learn more</a>
        </div>
    </div>
    )}

export default Card
function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {Poster === "N/A" ? (
          <img
            className="activator"
            src={"https://via.placeholder.com/250x360?text=" + Title}
          />
        ) : (
          <img className="activator" src={Poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <span>{Type} </span>
        <span>{Year}</span>
      </div>
    </div>
  );
}
export { Movie };

const AmandaNunes = () => {
  return (
    <div className="AmandaNunes">
      <div className="fighterCard">
        <div className="fighterCardHalf fighterCardLeft">
          <img
            src="/champions/Amanda_Nunes.png"
            alt="Amanda Nunes"
            className="fighterImage"
          ></img>
        </div>
        <div className="fighterCardHalf fighterCardRight">
          <div className="embedContainer">
            <p>Last 3 walkout songs</p>
            <iframe
              title={`song 3`}
              src="https://open.spotify.com/embed/track/0stPNUkU1LZnvxIcfrKnEZ?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 2`}
              src="https://open.spotify.com/embed/track/0bHA8LApeZHv7ZlhVUWg8X?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 1`}
              src="https://open.spotify.com/embed/track/4AAIAVjSyiq1N7SXKkwXZe?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmandaNunes;

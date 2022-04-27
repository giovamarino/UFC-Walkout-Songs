const FrancisNgannou = () => {
  return (
    <div className="FrancisNgannou">
      <div className="fighterCard">
        <div className="fighterCardHalf fighterCardLeft">
          <img
            src="/champions/Francis_Ngannou.png"
            alt="Francis Ngannou"
            className="fighterImage"
          ></img>
        </div>
        <div className="fighterCardHalf fighterCardRight">
          <div className="embedContainer">
            <p>Last 3 walkout songs</p>
            <iframe
              title={`song 3`}
              src="https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 2`}
              src="https://open.spotify.com/embed/track/16hivbAazfd7Li5o5WFguM?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />

            <iframe
              title={`song 1`}
              src="https://open.spotify.com/embed/track/1mZKs39oqYw1HmvgiOvMtS?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrancisNgannou;

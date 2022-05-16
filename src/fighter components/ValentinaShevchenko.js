const ValentinaShevchenko = () => {
  return (
    <div className="fighterCard">
      <div className="fighterCardHalf fighterCardLeft">
        <img
          src="/champions/Valentina_Shevchenko.png"
          alt="Valentina Shevchenko"
          className="fighterImage"
        ></img>
      </div>
      <div className="fighterCardHalf fighterCardRight">
        <div className="embedContainer">
          <p>Last 3 walkout songs</p>
          <iframe
            title={`song 3`}
            src="https://open.spotify.com/embed/track/0XMNr6oVX02CGorbPIjDde?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 2`}
            src="https://open.spotify.com/embed/track/0XMNr6oVX02CGorbPIjDde?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 1`}
            src="https://open.spotify.com/embed/track/0XMNr6oVX02CGorbPIjDde?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default ValentinaShevchenko;

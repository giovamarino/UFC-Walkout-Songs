const AljamainSterling = () => {
  return (
    <div className="fighterCard">
      <div className="fighterCardHalf fighterCardLeft">
        <img
          src="/champions/Aljamain_Sterling.png"
          alt="Aljamain Sterling"
          className="fighterImage"
        ></img>
      </div>
      <div className="fighterCardHalf fighterCardRight">
        <div className="embedContainer">
          <p>Last 3 walkout songs</p>
          <iframe
            title={`song 3`}
            src="https://open.spotify.com/embed/track/5fwSHlTEWpluwOM0Sxnh5k?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 2`}
            src="https://open.spotify.com/embed/track/0Xd3LUIjRESt5rSAGzvAvA?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 1`}
            src="https://open.spotify.com/embed/track/30z4LVkScpeNhwHFIB8Ewa?utm_source=generator&theme=0"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default AljamainSterling;

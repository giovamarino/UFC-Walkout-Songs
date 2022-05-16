const JuliannaPeña = () => {
  return (
    <div className="fighterCard">
      <div className="fighterCardHalf fighterCardLeft">
        <img
          src="/champions/Julianna_Peña.png"
          alt="Julianna Peña"
          className="fighterImage"
        ></img>
      </div>
      <div className="fighterCardHalf fighterCardRight">
        <div className="embedContainer">
          <p>Last 3 walkout songs</p>
          <iframe
            title={`song 3`}
            src="https://open.spotify.com/embed/track/3e2KBwxibC1rq4bA5TNKW2?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 2`}
            src="https://open.spotify.com/embed/track/1ZHYJ2Wwgxes4m8Ba88PeK?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 1`}
            src="https://open.spotify.com/embed/track/6GJ9seY4zx11sHMX9xsH6h?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default JuliannaPeña;

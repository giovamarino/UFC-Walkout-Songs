const CharlesOliveira = () => {
  return (
    <div className="fighterCard">
      <div className="fighterCardHalf fighterCardLeft">
        <img
          src="/champions/Charles_Oliveira.png"
          alt="Charles Oliveira"
          className="fighterImage"
        ></img>
      </div>
      <div className="fighterCardHalf fighterCardRight">
        <div className="embedContainer">
          <p>Last 3 walkout songs</p>
          <iframe
            title={`song 3`}
            src="https://open.spotify.com/embed/track/6x5e5VKWm3nquEZPy1WMup?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 2`}
            src="https://open.spotify.com/embed/track/6w5iFDoK8F9fr1zfT6tRd2?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 1`}
            src="https://open.spotify.com/embed/track/6w5iFDoK8F9fr1zfT6tRd2?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default CharlesOliveira;

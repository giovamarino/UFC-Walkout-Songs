const AlexanderVolkanovski = () => {
  return (
    <div className="fighterCard">
      <div className="fighterCardHalf fighterCardLeft">
        <img
          src="/champions/Alexander_Volkanovski.png"
          alt="Alexander Volkanovski"
          className="fighterImage"
        ></img>
      </div>
      <div className="fighterCardHalf fighterCardRight">
        <div className="embedContainer">
          <p>Last 3 walkout songs</p>
          <iframe
            title={`song 3`}
            src="https://open.spotify.com/embed/track/3ZZq9396zv8pcn5GYVhxUi?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 2`}
            src="https://open.spotify.com/embed/track/3ZZq9396zv8pcn5GYVhxUi?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <iframe
            title={`song 1`}
            src="https://open.spotify.com/embed/track/2q6fxAvSpqXR4jx9Ne7RGz?utm_source=generator&theme=0"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default AlexanderVolkanovski;

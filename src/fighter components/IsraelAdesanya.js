const IsraelAdesanya = () => {
  return (
    <div className="IsraelAdesanya">
      <div className="fighterCard">
        <div className="fighterCardHalf fighterCardLeft">
          <img
            src="/champions/Israel_Adesanya.png"
            alt="Israel Adesanya"
            className="fighterImage"
          ></img>
        </div>
        <div className="fighterCardHalf fighterCardRight">
          <div className="embedContainer">
            <p>Last 3 walkout songs</p>
            <iframe
              title={`song 3`}
              src="https://open.spotify.com/embed/track/6MtawOWcSDL2YJAhGD6SC3?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 2`}
              src="https://open.spotify.com/embed/track/3agtg0x11wPvLIWkYR39nZ?utm_source=generator&theme=0"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 1`}
              src="https://open.spotify.com/embed/track/2uMqG8w8oi09fB2YA2QLOm?utm_source=generator&theme=0"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsraelAdesanya;

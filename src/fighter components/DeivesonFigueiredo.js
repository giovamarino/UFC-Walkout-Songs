const DeivesonFigueiredo = () => {
  return (
    <div className="DeivesonFigueiredo">
      <div className="fighterCard">
        <div className="fighterCardHalf fighterCardLeft">
          <img
            src="/champions/Deiveson_Figueiredo.png"
            alt="Deiveson Figueiredo"
            className="fighterImage"
          ></img>
        </div>
        <div className="fighterCardHalf fighterCardRight">
          <div className="embedContainer">
            <p>Last 3 walkout songs</p>
            <iframe
              title={`song 3`}
              src="https://open.spotify.com/embed/track/0weAUscowxeqDtpCgtbpgp?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 2`}
              src="https://open.spotify.com/embed/track/5vuU78AvtYCLk4rRvJzzRj?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 1`}
              src="https://open.spotify.com/embed/track/5vuU78AvtYCLk4rRvJzzRj?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeivesonFigueiredo;

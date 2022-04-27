const RoseNamajunas = () => {
  return (
    <div className="RoseNamajunas">
      <div className="fighterCard">
        <div className="fighterCardHalf fighterCardLeft">
          <img
            src="/champions/Rose_Namajunas.png"
            alt="Rose Namajunas"
            className="fighterImage"
          ></img>
        </div>
        <div className="fighterCardHalf fighterCardRight">
          <div className="embedContainer">
            <p>Last 3 walkout songs</p>
            <iframe
              title={`song 3`}
              src="https://open.spotify.com/embed/track/4ho1yu0RPW406kneTDUmn3?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 2`}
              src="https://open.spotify.com/embed/track/57bgtoPSgt236HzfBOd8kj?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title={`song 1`}
              src="https://open.spotify.com/embed/track/3jlRRMWlz3TgZpUkGdGmMN?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoseNamajunas;

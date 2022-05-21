import { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import DeivesonFigueiredo from "./fighter components/DeivesonFigueiredo";
import AljamainSterling from "./fighter components/AljamainSterling";
import AlexanderVolkanovski from "./fighter components/AlexanderVolkanovski";
import CharlesOliveira from "./fighter components/CharlesOliveira";
import KamaruUsman from "./fighter components/KamaruUsman";
import IsraelAdesanya from "./fighter components/IsraelAdesanya";
import GloverTeixeira from "./fighter components/GloverTeixeira";
import FrancisNgannou from "./fighter components/FrancisNgannou";
import RoseNamajunas from "./fighter components/RoseNamajunas";
import ValentinaShevchenko from "./fighter components/ValentinaShevchenko";
import JuliannaPeña from "./fighter components/JuliannaPeña";
import AmandaNunes from "./fighter components/AmandaNunes";
import Error from "./Error";

const App = () => {
  let [fighter, setFighter] = useState(`Deiveson Figueiredo`);
  const navigate = useNavigate();

  // for the setFighter hook, so the title displays nicely. See onChange function for more
  const fighterNames = {
    DeivesonFigueiredo: `Deiveson Figueiredo`,
    AljamainSterling: `Aljamain Sterling`,
    AlexanderVolkanovski: `Alexander Volkanovski`,
    CharlesOliveira: `Charles Oliveira`,
    KamaruUsman: `Kamaru Usman`,
    IsraelAdesanya: `Israel Adesanya`,
    GloverTeixeira: `Glover Teixeira`,
    FrancisNgannou: `Francis Ngannou`,
    RoseNamajunas: `Rose Namajunas`,
    ValentinaShevchenko: `Valentina Shevchenko`,
    JuliannaPena: `Julianna Peña`,
    AmandaNunes: `Amanda Nunes`,
  };
  const fighterNamesArray = Object.entries(fighterNames);

  return (
    <div className="container">
      <header>
        <img src="/UFC_logo.png" alt="UFC Logo" className="UFCLogo"></img>
      </header>
      <main>
        <h1>{fighter}</h1>
        <Routes>
          <Route path="/" element={<DeivesonFigueiredo />} />
          <Route path="/DeivesonFigueiredo" element={<DeivesonFigueiredo />} />
          <Route path="/AljamainSterling" element={<AljamainSterling />} />
          <Route
            path="/AlexanderVolkanovski"
            element={<AlexanderVolkanovski />}
          />
          <Route path="/CharlesOliveira" element={<CharlesOliveira />} />
          <Route path="/KamaruUsman" element={<KamaruUsman />} />
          <Route path="/IsraelAdesanya" element={<IsraelAdesanya />} />
          <Route path="/GloverTeixeira" element={<GloverTeixeira />} />
          <Route path="/FrancisNgannou" element={<FrancisNgannou />} />
          <Route path="/RoseNamajunas" element={<RoseNamajunas />} />
          <Route
            path="/ValentinaShevchenko"
            element={<ValentinaShevchenko />}
          />
          <Route path="/RoseNamajunas" element={<RoseNamajunas />} />
          <Route path="/JuliannaPena" element={<JuliannaPeña />} />
          <Route path="/AmandaNunes" element={<AmandaNunes />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <div className="inputChild">
          <label htmlFor="fighterLabel">Fighter: </label>
          <select
            id="fighterLabel"
            onChange={(e) => {
              for (let i = 0; i < fighterNamesArray.length; i++) {
                const element = fighterNamesArray[i];
                if (element[0] === e.target.value) {
                  setFighter(element[1]);
                }
              }
              navigate(`/${e.target.value}`);
            }}
          >
            <option value="DeivesonFigueiredo">Deiveson Figueiredo</option>
            <option value="AljamainSterling">Aljamain Sterling</option>
            <option value="AlexanderVolkanovski">Alexander Volkanovski</option>
            <option value="CharlesOliveira">Charles Oliveira</option>
            <option value="KamaruUsman">Kamaru Usman</option>
            <option value="IsraelAdesanya">Israel Adesanya</option>
            <option value="GloverTeixeira">Glover Teixeira</option>
            <option value="FrancisNgannou">Francis Ngannou</option>
            <option value="RoseNamajunas">Rose Namajunas</option>
            <option value="ValentinaShevchenko">Valentina Shevchenko</option>
            <option value="JuliannaPena">Julianna Peña</option>
            <option value="AmandaNunes">Amanda Nunes</option>
          </select>
        </div>
      </main>
    </div>
  );
};
export default App;

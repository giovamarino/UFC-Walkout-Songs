import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

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

const App = () => {
  let [fighter, setFighter] = useState(`Deiveson Figueiredo`);

  return (
    <Router>
      <div className="container">
        <img src="/UFC_logo.png" alt="UFC Logo" className="UFCLogo"></img>
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
        </Routes>
        <div className="inputChild">
          <label htmlFor="fighterLabel">Fighter: </label>
          <select
            id="fighterLabel"
            onChange={(e) => {
              setFighter(e.target.value);
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
            <option value="JuliannaPeña">Julianna Peña</option>
            <option value="AmandaNunes">Amanda Nunes</option>

            {/* redirect to deiveson? use the Navigate component */}
          </select>
          <button
            onClick={() => {
              // useNavigate(`/AljamainSterling`);
              const select = document.getElementById("fighterLabel");
              const value = select.options[select.selectedIndex].value;
              console.log(value);
              // useNavigate()(`/AljamainSterling`);
            }}
          >
            select fighter
          </button>
        </div>
      </div>
    </Router>
  );
};
export default App;

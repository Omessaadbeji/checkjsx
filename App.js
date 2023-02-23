import "./App.css";
import Adress from "./Component/Profile/Adress";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js";
function App() {
  return (
    <div className="First">
      <div className="photo">
        <ProfilePhoto/>
      </div>

      <div className="name">
        <FullName/>
      </div>
      <div className="adress">
        <Adress/>
      </div>
    </div>
  );
}

export default App;

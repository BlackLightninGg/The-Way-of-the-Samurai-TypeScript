import s from './App.module.css'
import { Header } from "./components/Header/Header";
import { Messages } from "./components/Messages/Messages";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <div className={s.content}>
        {/* <Profile /> */}
        <Messages />
      </div>
    </div>
  );
}

export default App;

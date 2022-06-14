import style from "./App.module.css";
import logo from "./utils/logo.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { MoviesDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="./">
          <div className={style.logoContenedor}>
            <img src={logo} className={style.logo} alt="Logo trending movies" />
          </div>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MoviesDetails />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

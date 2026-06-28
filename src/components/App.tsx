import { Divider } from 'sketchbook-ui';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'sketchbook-ui/style.css';
import Header from './Header';
import MainPage from './pages/Main';
import MoresPage from './pages/Mores';
import PeoplePage from './pages/People';
import GroupsPage from './pages/Groups';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Divider variant='dashed'></Divider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/people" element={<PeoplePage />}></Route>
          <Route path="/groups" element={<GroupsPage />}></Route>
          <Route path="/mores" element={<MoresPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

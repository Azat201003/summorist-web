import { Divider } from 'sketchbook-ui';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'sketchbook-ui/style.css';
import Header from './Header';
import MainPage from './pages/Main';
import MoresPage from './pages/Mores';
import PeoplePage from './pages/People';
import GroupsPage from './pages/Groups';

function App() {
	const navigate = useNavigate()
	return (
	<>
		<Header navigate={navigate} />
		<Divider variant='dashed'></Divider>
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/people" element={<PeoplePage />} />
			<Route path="/groups" element={<GroupsPage />} />
			<Route path="/mores" element={<MoresPage navigate={navigate}/>} />
		</Routes>
	</>
	);
}

export default App;

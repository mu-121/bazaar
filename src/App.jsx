import './App.css';
import { Home } from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import { AdminDashboard } from './pages/admin/AdminDashboard';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='/admin-dashboard'
				element={<AdminDashboard />}
			/>
		</Routes>
	);
}

export default App;

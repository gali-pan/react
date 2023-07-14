import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main";
import { Messages } from "./components/Messages";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";

function App() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-3">
					<div className="nav flex-column nav-pills" aria-orientation="vertical">
						<NavLink className="nav-link" to="/">
							Главная
						</NavLink>
						<NavLink className="nav-link" to="profile">
							Профиль
						</NavLink>
						<NavLink className="nav-link" to="messages">
							Сообщения
						</NavLink>
						<NavLink className="nav-link" to="settings">
							Настройки
						</NavLink>
					</div>
				</div>
				<div className="col-9">
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/messages" element={<Messages />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
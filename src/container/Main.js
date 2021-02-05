import { BrowserRouter, Route, Switch } from "react-router-dom";
import s from "./Main.module.css";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Friends from "../components/Friends/Friends";
import Faculty from "../components/Faculty/Faculty";
import Gallery from "../components/Gallery/Gallery";
import Books from "../components/Books/Books";
import FriendRon from '../components/Friends/FriendsList/FriendRon';
import FriendHermione from '../components/Friends/FriendsList/FriendHermione';
import FriendGinny from '../components/Friends/FriendsList/FriendGinny';
import FriendDobby from '../components/Friends/FriendsList/FriendDobby';
import FriendFred from '../components/Friends/FriendsList/FriendFred';
import FriendGeorge from '../components/Friends/FriendsList/FriendGeorge';
import FriendCedric from '../components/Friends/FriendsList/FriendCedric';
import FriendNeville from '../components/Friends/FriendsList/FriendNeville';
import FriendLuna from '../components/Friends/FriendsList/FriendLuna';

const Main = () => {
	return (
		<BrowserRouter>
			<div className={s.main}>
				<header className={s.header}>
					<a href='/about' className={s.logo}>
						<img src='./images/logo.png' alt='logo' />
					</a>
				</header>
				<Menu />
				<div className={s.content}>
					<Switch>
						<Route path='/about' component={About} />
						<Route path='/friends' component={Friends} />
						<Route path='/faculty' component={Faculty} />
						<Route path='/gallery' component={Gallery} />
						<Route path='/books' component={Books} />
						<Route path='/ron' component={FriendRon} />
						<Route path='/hermione' component={FriendHermione} />
						<Route path='/ginny' component={FriendGinny} />
						<Route path='/dobby' component={FriendDobby} />
						<Route path='/fred' component={FriendFred} />
						<Route path='/george' component={FriendGeorge} />
						<Route path='/cedric' component={FriendCedric} />
						<Route path='/luna' component={FriendLuna} />
						<Route path='/neville' component={FriendNeville} />
						<Route component={About} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default Main;

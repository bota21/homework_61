import s from "./Friends.module.css";
import {v4 as uuidv4} from 'uuid';
import { NavLink } from 'react-router-dom';

const Friends = () => {
    const friendsList = ([
        { name: 'ron weasley', img: 'ron.jpg', link: 'ron' },
        { name: 'Hermione Jean Granger', img: 'hermione.png', link: 'hermione' },
        { name: 'Ginny weasley', img: 'ginny.jpg', link: 'ginny' },
        { name: 'dobby', img: 'dobby.jpg', link: 'dobby' },
        { name: 'Fred weasley', img: 'Fred.jpg', link: 'fred' },
        { name: 'George weasley', img: 'George.jpg', link: 'george' },
        { name: 'cedric diggory', img: 'cedric.jpg', link: 'cedric' },
        { name: 'neville longbottom', img: 'nevil.png', link: 'neville' },
        { name: 'luna lovegood', img: 'luna.jpg', link: 'luna' },
        { name: 'sirius black', img: 'sirius.jpg', link: 'sirius' },
        { name: 'albus dumbledore', img: 'albus.jpg', link: 'albus' },
        { name: 'Minerva McGonagall', img: 'mcgonagall.jpg', link: 'minerva' }
    ]);
    let addFriends = friendsList.map(friend => {
        return <NavLink to={'/'+friend.link} className={s.card} key={uuidv4()}>
        <img src={'/images/person/'+friend.img}  alt={friend.name}></img>
        <h3 className={s.title}>{friend.name}</h3>
    </NavLink>
    })
	return (
        <div className='friends'>
			<div className={s.cards}>
             {addFriends}
			</div>
		</div>
	);
};

export default Friends;

import s from "./Faculty.module.css";
import {v4 as uuidv4} from 'uuid';

const Faculty = () => {
	const facultyList = ([
		{name: 'Gryffindor', img: 'Gryffindor.png'},
		{name: 'Hufflepuff', img: 'Hufflepuff.png'},
		{name: 'Ravenclaw', img: 'Ravenclaw.png'},
		{name: 'Slytherin', img: 'Slytherin.png'}
	]);
	let addFaculty = facultyList.map(faculty => {
		return <div className={s.card} key={uuidv4()}>
		<img src={'./images/faculty/' + faculty.img} alt={faculty.name}></img>
		<h3 className={s.title}>{faculty.name}</h3>
	</div>
	})
	return (
		<div className={s.faculty}>
			<img src='./images/faculty/Hogwarts-1.png' alt='Hogwarts'></img>
			<div className={s.cards}>
				{addFaculty}
			</div>
		</div>
	);
};

export default Faculty;

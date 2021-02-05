import s from "./Books.module.css";
import {v4 as uuidv4} from 'uuid';

const Books = () => {
	const books = ([
		{
			name: "Harry Potter and the Philosopher's Stone",
			img: 'book1.jpg',
			release: '1st',
			date: '26 June 1997 (UK) 1 September 1998 (US)'
		},
		{
			name: "Harry Potter and the Chamber of Secrets",
			img: 'book2.jpg',
			release: '2nd',
			date: `2 July 1998 (UK)	2 June 1999 (US)`
		},
		{
			name: " Harry Potter and the Prisoner of Azkaban",
			img: 'book3.jpg',
			release: '3rd',
			date: `8 July 1999 (UK) 8 September 1999 (US)`
		},
		{
			name: "Harry Potter and the Goblet of Fire",
			img: 'book4.jpg',
			release: '4th',
			date: '8 July 2000'
		},
		{
			name: "Harry Potter and the Order of the Phoenix",
			img: 'book5.jpg',
			release: '5th',
			date: '21 June 2003 (UK) 4 June 2004 (US)'
		},
		{
			name: "Harry Potter and the Half-Blood Prince",
			img: 'book6.jpg',
			release: '6th',
			date: '16 July 2005 (UK) 9 June 2006 (US)'
		},
		{
			name: "Harry Potter and the Deathly Hallows",
			img: 'book7.jpg',
			release: '7th',
			date: '21 July 2007 (UK) 27 July 2007 (US)'
		}
	])
	let addBooks = books.map(item => {
		return (
			<div className={s.wrapper} key={uuidv4()}>
				<h4 className={s.title}>{item.name}</h4>
				<img src={"./images/books/" + item.img} alt={item.name} />
				<p className={s.info}>About book</p>
				<div className={s.info_wrapper}>
					<p className={s.info_title}>Author</p>
					<p className={s.info_text}>J. K. Rowling</p>
				</div>
				<div className={s.info_wrapper}>
					<p className={s.info_title}>Release number</p>
					<p className={s.info_text}>{item.release}</p>
				</div>
				<div className={s.info_wrapper}>
					<p className={s.info_title}>Genre</p>
					<p className={s.info_text}>	Fantasy</p>
				</div>
				<div className={s.info_wrapper}>
					<p className={s.info_title}>Publication date</p>
					<p className={s.info_text}>{item.date}</p>
				</div>
			</div>
		)
	})
	return <div className={s.books}>
		{addBooks}
	</div>;
};

export default Books;

import "./About.css";

const About = () => {
	return (
		<div className='about'>
			<div className='about_wrapper'>
				<div className='about_title_wrapper'>
					<h2 className='about_title'>Harry James Potter</h2>
					<p className='about_title_text'>
						The most famous student in Hogwarts
					</p>
					<p className='about_title_text'>
						Harry James Potter  was an English half-blood wizard, and one of the most
						famous wizards of modern times. He was the only child and son of James and
						Lily Potter (née Evans), both members of the original Order of the Phoenix.
						Harry's birth was overshadowed by a prophecy, naming either himself or
						Neville Longbottom as the one with the power to vanquish Lord Voldemort.
						After half of the prophecy was reported to Voldemort, courtesy of Severus
						Snape, Harry was chosen as the target due to his many similarities with
						the Dark Lord. In turn, this caused the Potter family to go into hiding.
						Voldemort made his first vain attempt to circumvent the prophecy when
						Harry was a year and three months old.
					</p>
					<p className='about_title_text'>
						During this attempt, he murdered
						Harry's parents as they tried to protect him, but this unsuccessful
						attempt to kill Harry led to Voldemort's first downfall. This downfall
						marked the end of the First Wizarding War, and to Harry henceforth being
						known as the "Boy Who Lived", as he was the only known survivor of
						the Killing Curse.
					</p>
				</div>
				<img src='./images/person/harry.jpg' alt='Harry' />
			</div>
			<div className='about_wrapper'>
				<div className='about_wrapper_content'>
					<p className='about_wrapper_content_title'>Gender</p>
					<p className='about_wrapper_content_text'>Male</p>
				</div>
				<div className='about_wrapper_content'>
					<p className='about_wrapper_content_title'>Nicknames</p>
					<p className='about_wrapper_content_text'>The Boy Who Lived The Chosen One</p>
				</div>
				<div className='about_wrapper_content'>
					<p className='about_wrapper_content_title'>Blood status</p>
					<p className='about_wrapper_content_text'>Half-blood</p>
				</div>
				<div className='about_wrapper_content'>
					<p className='about_wrapper_content_title'>Family</p>
					<p className='about_wrapper_content_text'>
						<li>James Potter (father)</li>
						<li>Lily Potter (mother)</li>
					</p>
				</div>
				<div className='about_wrapper_content'>
					<p className='about_wrapper_content_title'>Spouse</p>
					<p className='about_wrapper_content_text'>Ginny Weasley</p>
				</div>
				<div className='about_wrapper_content'>
					<p className='about_wrapper_content_title'>Born</p>
					<p className='about_wrapper_content_text'>31 July 1980</p>
				</div>
				<div className='about_wrapper_content'>
					<p className='about_wrapper_content_title'>Children</p>
					<p className='about_wrapper_content_text'>
						<li>James Sirius Potter</li>
						<li>Albus Severus Potter</li>
						<li>Lily Luna Potter</li>
					</p>
				</div>
				<div className='about_wrapper_content'>
					<p className='about_wrapper_content_title'>House</p>
					<p className='about_wrapper_content_text'>Gryffindor</p>
				</div>
			</div>
		</div>
	);
};

export default About;

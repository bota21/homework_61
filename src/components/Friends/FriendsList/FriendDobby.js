import './FriendsList.css';

const FriendRon = () => {
    return (
        <div className='friend'>
            <div className='friend_wrapper'>
                <div className='friend_title_wrapper'>
                    <h2 className='friend_title'>Dobby</h2>
                    <p className='friend_title_text'>
                        Dobby was a male house-elf who served the Malfoy family. His masters were Dark
                        Wizards who treated him cruelly. In 1992 he disobeyed his masters and tried 
                        to warn Harry Potter of the plot to have the Chamber of Secrets reopened. He
                         came to know this via the contact between his masters and Lord Voldemort. At
                          the end of that school year, after Harry had vanquished the memory of Tom 
                          Riddle and slayed the basilisk in the Chamber of Secrets, he tricked Lucius
                           Malfoy into freeing Dobby. Harry accomplished this by placing 
                           T. M. Riddle's Diary inside his own sock. Lucius disgustedly ripped 
                           the sock off the book and threw the sock into the air, where Dobby caught
                            it.
					</p>
                </div>
                <img src='./images/person/dobby.jpg' alt='Dobby' />
            </div>
            <div className='friend_wrapper'>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Gender</p>
                    <p className='friend_wrapper_content_text'>Male</p>
                </div>
                <div className='about_wrapper_content'>
                    <p className='about_wrapper_content_title'>Title</p>
                    <p className='about_wrapper_content_text'>Free elf</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Born</p>
                    <p className='friend_wrapper_content_text'>28 June (year unknown) – March, 1998</p>
                </div>
            </div>
        </div>
    );
};

export default FriendRon;

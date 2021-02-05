import './FriendsList.css';

const FriendGeorge = () => {
    return (
        <div className='friend'>
            <div className='friend_wrapper'>
                <div className='friend_title_wrapper'>
                    <h2 className='friend_title'>George Weasley</h2>
                    <p className='friend_title_text'>
                    George Weasley was an English pure-blood wizard, the fifth son and the less dominant among the twins of Arthur Weasley and Molly Weasley (née Prewett), younger brother of Bill, Charlie and Percy and older brother to Ron, and Ginny, and younger twin brother and best friend of the late Fred Weasley. George's first few years were marked by the height of the First Wizarding War and Lord Voldemort's first fall. He attended Hogwarts School of Witchcraft and Wizardry from 1989-1996 with Fred, and was Sorted into Gryffindor House. He and Fred were popular students, becoming Beaters for the Gryffindor Quidditch team in their second year, and members of Dumbledore's Army in their unfinished seventh year. A born prankster and inventor, George left Hogwarts prior to graduation to become a successful entrepreneur, alongside his twin brother, and opened the joke shop Weasleys' Wizard Wheezes at 93 Diagon Alley. He was a member of the Order of the Phoenix and fought in the Battle of the Seven Potters and the Battle of Hogwarts; in the latter, Fred died, leaving George devastated.
					</p>
                </div>
                <img src='./images/person/George.jpg' alt='George' />
            </div>
            <div className='friend_wrapper'>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Gender</p>
                    <p className='friend_wrapper_content_text'>Male</p>
                </div>
                <div className='about_wrapper_content'>
                    <p className='about_wrapper_content_title'>Blood status</p>
                    <p className='about_wrapper_content_text'>Pure-blood</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Family</p>
                    <ul className='friend_wrapper_content_text'>
                        <li>Septimus Weasley (paternal grandfather)</li>
                        <li>Cedrella Weasley (née Black) (paternal grandmother)</li>
                        <li>Mr Prewett (maternal grandfather)</li>
                        <li>Mrs Prewett (maternal grandmother)</li>
                        <li>Arthur Weasley (father)</li>
                        <li>Molly Weasley (née Prewett) (mother)</li>
                        <li>Bill Weasley (older brother)</li>
                        <li>Charlie Weasley (older brother)</li>
                        <li>Percy Weasley (older brother)</li>
                        <li>Fred Weasley I (older twin brother)</li>
                    </ul>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Spouse</p>
                    <p className='friend_wrapper_content_text'>Angelina Weasley</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Born</p>
                    <p className='friend_wrapper_content_text'>1 April, 1978</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Children</p>
                    <p className='friend_wrapper_content_text'>
                        <li>Fred Weasley II (son)</li>
                        <li>Roxanne Weasley (daughter)</li>
                    </p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>House</p>
                    <p className='friend_wrapper_content_text'>Gryffindor</p>
                </div>
            </div>
        </div>
    );
};

export default FriendGeorge;

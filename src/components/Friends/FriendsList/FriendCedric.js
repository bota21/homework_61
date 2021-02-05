import './FriendsList.css';

const FriendCedric = () => {
    return (
        <div className='friend'>
            <div className='friend_wrapper'>
                <div className='friend_title_wrapper'>
                    <h2 className='friend_title'>Cedric Diggory</h2>
                    <p className='friend_title_text'>
                    Cedric Diggory was a British wizard who was the son of Amos Diggory and his wife. He started attending Hogwarts School of Witchcraft and Wizardry in 1989, and was sorted into the Hufflepuff House. During his time at school he was a prefect and captained the Hufflepuff Quidditch team, playing as Seeker. In his sixth year Cedric put his name forward to compete in the Triwizard Tournament.</p>
                </div>
                <img src='./images/person/cedric.jpg' alt='Cedric' />
            </div>
            <div className='friend_wrapper'>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Gender</p>
                    <p className='friend_wrapper_content_text'>Male</p>
                </div>
                <div className='about_wrapper_content'>
                    <p className='about_wrapper_content_title'>Blood status</p>
                    <p className='about_wrapper_content_text'>Pure-blood (possibly) or Half-blood</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Family</p>
                    <ul className='friend_wrapper_content_text'>
                        <li>Amos Diggory (father)</li>
                        <li>Mrs Diggory[2] (mother)</li>
                        <li>Eldritch Diggory (possible relative)</li>
                    </ul>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Born</p>
                    <p className='friend_wrapper_content_text'>September/October, 1977 – 24 June, 1995</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>House</p>
                    <p className='friend_wrapper_content_text'>Gryffindor</p>
                </div>
            </div>
        </div>
    );
};

export default FriendCedric;

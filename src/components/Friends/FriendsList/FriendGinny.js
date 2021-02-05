import './FriendsList.css';

const FriendDobby = () => {
    return (
        <div className='friend'>
            <div className='friend_wrapper'>
                <div className='friend_title_wrapper'>
                    <h2 className='friend_title'>Ginevra Molly Potter</h2>
                    <p className='friend_title_text'>
                        Ginevra Molly "Ginny" Potter occasionally known as Gin by Harry Potter, was an English pure-blood[3] witch, the youngest of Arthur and Molly Weasley's (née Prewett) seven children, and the first female to be born into the Weasley line for several generations. She and her older brothers grew up in The Burrow on the outskirts of Ottery St Catchpole in Devon.
					</p>
                </div>
                <img src='./images/person/ginny.jpg' alt='Ginny' />
            </div>
            <div className='friend_wrapper'>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Gender</p>
                    <p className='friend_wrapper_content_text'>Female</p>
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
                        <li>Fred Weasley I (older brother)</li>
                        <li>George Weasley (older brother)</li>
                    </ul>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Spouse</p>
                    <p className='friend_wrapper_content_text'>Harry Potter</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Born</p>
                    <p className='friend_wrapper_content_text'>11 August, 1981</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Children</p>
                    <p className='friend_wrapper_content_text'>
                        <li>James Sirius Potter</li>
                        <li>Albus Severus Potter</li>
                        <li>Lily Luna Potter</li>
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

export default FriendDobby;

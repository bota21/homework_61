import './FriendsList.css';

const FriendRon = () => {
    return (
        <div className='friend'>
            <div className='friend_wrapper'>
                <div className='friend_title_wrapper'>
                    <h2 className='friend_title'>Ronald Bilius Weasley</h2>
                    <p className='friend_title_text'>
                        Ronald Bilius "Ron" Weasley  was an English pure-blood wizard, the sixth and
                        youngest son of Arthur and Molly Weasley (née Prewett). He was also the
                        younger brother of Bill, Charlie, Percy, Fred, George, and the elder brother
                        of Ginny. Ron and his siblings lived at the The Burrow, on the outskirts of
                        Ottery St Catchpole, Devon.
					</p>
                </div>
                <img src='./images/person/ron.jpg' alt='Ron' />
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
                        <li>Fred Weasley I (older brother)</li>
                        <li>George Weasley (older brother)</li>
                    </ul>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Spouse</p>
                    <p className='friend_wrapper_content_text'>Hermione Granger</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Born</p>
                    <p className='friend_wrapper_content_text'>1 March, 1980</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Children</p>
                    <p className='friend_wrapper_content_text'>
                        <li>Rose Granger-Weasley(daughter)</li>
                        <li>Hugo Granger-Weasley (son)</li>
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

export default FriendRon;

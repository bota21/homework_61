import './FriendsList.css';

const FriendFred = () => {
    return (
        <div className='friend'>
            <div className='friend_wrapper'>
                <div className='friend_title_wrapper'>
                    <h2 className='friend_title'>Fred Weasley</h2>
                    <p className='friend_title_text'>
                        Fred Weasley was an English pure-blood wizard, was the fourth son and the middle child the most daring and dominant among the twins of Arthur Weasley and Molly Weasley (née Prewett), younger brother to Bill, Charlie and Percy, and older brother of Ron and Ginny Weasley, and older twin brother and best friend to George Weasley. Fred's first few years were marked by the height of the First Wizarding War and when Lord Voldemort fell for the first time.
					</p>
                </div>
                <img src='./images/person/Fred.jpg' alt='Fred' />
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
                        <li>George Weasley (older twin brother)</li>
                    </ul>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Born</p>
                    <p className='friend_wrapper_content_text'>1 April, 1978 – 2 May, 1998</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>House</p>
                    <p className='friend_wrapper_content_text'>Gryffindor</p>
                </div>
            </div>
        </div>
    );
};

export default FriendFred;

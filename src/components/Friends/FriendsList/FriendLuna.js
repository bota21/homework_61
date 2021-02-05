import './FriendsList.css';

const FriendGeorge = () => {
    return (
        <div className='friend'>
            <div className='friend_wrapper'>
                <div className='friend_title_wrapper'>
                    <h2 className='friend_title'>Luna Scamander (née Lovegood)</h2>
                    <p className='friend_title_text'>Luna Scamander (née Lovegood) was a British witch, the only child and daughter of Xenophilius and Pandora Lovegood. Her mother accidentally died while experimenting with spells when Luna was nine and Luna was raised by her father, editor of the magazine The Quibbler, in a rook-like house near the village of Ottery St Catchpole in Devon.</p>
                </div>
                <img src='./images/person/luna.jpg' alt='Luna' />
            </div>
            <div className='friend_wrapper'>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Gender</p>
                    <p className='friend_wrapper_content_text'>Female</p>
                </div>
                <div className='about_wrapper_content'>
                    <p className='about_wrapper_content_title'>Blood status</p>
                    <p className='about_wrapper_content_text'>Pure-blood or Half-blood</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Family</p>
                    <ul className='friend_wrapper_content_text'>
                        <li>Xenophilius Lovegood (father)</li>
                        <li>Pandora Lovegood (mother)</li>
                    </ul>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Spouse</p>
                    <p className='friend_wrapper_content_text'>Rolf Scamander </p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Born</p>
                    <p className='friend_wrapper_content_text'>13 February, 1981</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Children</p>
                    <p className='friend_wrapper_content_text'>
                        <li>Lorcan (son)</li>
                        <li>Lysander (son)</li>
                        <li>Lysander (son)</li>
                    </p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>House</p>
                    <p className='friend_wrapper_content_text'>Ravenclaw</p>
                </div>
            </div>
        </div>
    );
};

export default FriendGeorge;

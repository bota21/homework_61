import './FriendsList.css';

const FriendLuna = () => {
    return (
        <div className='friend'>
            <div className='friend_wrapper'>
                <div className='friend_title_wrapper'>
                    <h2 className='friend_title'>Neville Longbottom</h2>
                    <p className='friend_title_text'>
                        Professor Neville Longbottom was a British pure-blood wizard, the only child and son of Frank and Alice Longbottom. Neville's parents were well-respected Aurors and members of the original Order of the Phoenix until they were tortured into insanity by Bellatrix Lestrange and three other Death Eaters with the Cruciatus Curse when he was about sixteen months old. They were placed in the Janus Thickey Ward at St Mungo's Hospital for Magical Maladies and Injuries, leaving Neville to be raised by his grandmother, Augusta Longbottom.</p>
                </div>
                <img src='./images/person/nevil.png' alt='Neville' />
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
                        <li>Frank Longbottom (father)</li>
                        <li>Alice Longbottom (mother)</li>
                        <li>Mr Longbottom (paternal grandfather)</li>
                        <li>Augusta Longbottom (paternal grandmother)</li>
                        <li>Algie Longbottom (great-uncle)</li>
                        <li>Enid Longbottom (great-aunt)</li>
                    </ul>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Spouse</p>
                    <p className='friend_wrapper_content_text'>Hannah Abbott</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>Born</p>
                    <p className='friend_wrapper_content_text'>30 July 1980</p>
                </div>
                <div className='friend_wrapper_content'>
                    <p className='friend_wrapper_content_title'>House</p>
                    <p className='friend_wrapper_content_text'>Gryffindor</p>
                </div>
            </div>
        </div>
    );
};

export default FriendLuna;

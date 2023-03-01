import who from './who.js';
import WhoToFollowListItem from './WhoToFollowListItem.js';


const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item fw-bolder">Who to follow</li>
            ${
                who.map(w => {
                    return (WhoToFollowListItem(w));
                }).join('')
            }
            </ul>
        
    `);
};

export default WhoToFollowList;


const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row d-flex align-items-center ">
                <div class="col-2 ">
                    <img class="rounded-circle"
                         height="48"
                         width="48"
                         src="${who.avatarIcon}" >
                </div>

                <div class="col-8 ">
                    <div class="fw-bold text-white">${who.userName}
                    <i class="fa-solid fa-circle"></i>
                    </div>
                    <div class="h6 text-white fw-normal">@${who.handle}</div>
                </div>

                <div class="col-2 ">
                    <button class="btn btn-primary btn-sm float-end rounded-pill" type="button">Follow</button>
                </div>
            </div>
        </li>

 `);
}
export default WhoToFollowListItem;
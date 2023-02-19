const PostItem = (post) => {
    if (post.title === '' && post.content === '') {
        return (`<li class="list-group-item bg-black border-0 border-top border-bottom-0 border-light">
        <div>
            <div class="pt-1 d-flex flex-row">
    
                <div class="me-3">
                    <img class="rounded-circle" style="height: 40px; width: 40px"
                         src="${post.portrait}" >
                </div>
    
                <div>
                    <div>
                        <div>
                            <span class="h6 text-white fw-bold">${post.author}</span>
                            <img class="rounded-circle ms-1" style="height: 15px; width: 15px" src="../../images/white-tick.png">
                            <span class="h6 text-secondary fw-normal">@${post.handle}</span>
                            <span class="h6 text-secondary fw-normal">· ${post.time}</span>
                            <a href="#" class="h6 text-secondary fw-normal float-end"><i class="fa-solid fa-ellipsis"></i></a>
                        </div>
        
                        <div>
                            <p class="h6 fw-normal ">${post.summary}</p>
                        </div>
                    </div>
        
                    <div class="card rounded-4 overflow-hidden border border-light">
                        <img class="card-img-top" src="${post.image}">
       
                        
                    </div>
                    
                </div>
            </div>
    
            <div class="d-flex justify-content-around mt-2">
                        <div >
                            <a href="#" style="text-decoration: none">
                                <i class="fa fa-regular fa-comment text-secondary" ></i>
                                <span class="wd-font-family  text-secondary">${post.comments}</span>
                            </a>
                        </div>
        
                        <div >
                            <a href="#" style="text-decoration: none">
                                <i class="fa fa-solid fa-retweet text-secondary"></i>
                                <span class="wd-font-family text-secondary">${post.reposts}</span>
                            </a>
                        </div >
        
                        <div >
                            <a href="#" style="text-decoration: none">
                                <i class="fa fa-regular fa-heart wd-small-icon text-secondary"></i>
                                <span class="wd-font-family  text-secondary">${post.likes}</span>
                            </a>
                        </div>
        
                        <div >
                            <a href="#">
                                <i class="fa fa-solid fa-arrow-up-from-bracket  text-secondary" style="text-decoration: none"></i>
                            </a>
                        </div>
        
                    </div>
        </div>

        </li>`);
    } else {
        return (`<li class="list-group-item bg-black border-0 border-light">
        <div>
            <div class="pt-1 d-flex flex-row">
    
                <div class="me-3">
                    <img class="rounded-circle" style="height: 40px; width: 40px"
                         src="${post.portrait}" >
                </div>
    
                <div>
                    <div>
                        <div>
                            <span class="h6 text-white fw-bold">${post.author}</span>
                            <img class="rounded-circle ms-1" style="height: 15px; width: 15px" src="../../images/white-tick.png">
                            <span class="h6 text-secondary fw-normal">@${post.handle}</span>
                            <span class="h6 text-secondary fw-normal">· ${post.time}</span>
                            <a href="#" class="h6 text-secondary fw-normal float-end"><i class="fa-solid fa-ellipsis"></i></a>
                        </div>
        
                        <div>
                            <p class="h6 fw-normal ">${post.summary}</p>
                        </div>
                    </div>
        
                    <div class="card rounded-4 overflow-hidden border border-light">
                        <img class="card-img-top" src="${post.image}">
        
                        <div class="card-body bg-black m-0 border-top border-light">
                            <span class="card-text h6 text-white">${post.title}</span>
                            <p class="card-text h6 text-secondary fw-normal">
                                 ${post.content}</p>
                        </div>
                        
                    </div>

                </div>
            </div>
    
            <div class="d-flex justify-content-around p-2 mt-1">
            
                <div >
                    <a href="#" style="text-decoration: none">
                        <i class="fa fa-regular fa-comment text-secondary" ></i>
                        <span class="h6 fw-normal  text-secondary">${post.comments}</span>
                    </a>
                </div>

                <div >
                    <a href="#" style="text-decoration: none">
                        <i class="fa fa-solid fa-retweet text-secondary"></i>
                        <span class="wd-font-family text-secondary">${post.reposts}</span>
                    </a>
                </div >

                <div >
                    <a href="#" style="text-decoration: none">
                        <i class="fa fa-regular fa-heart wd-small-icon text-secondary"></i>
                        <span class="wd-font-family  text-secondary">${post.likes}</span>
                    </a>
                </div>

                <div >
                    <a href="#">
                        <i class="fa fa-solid fa-arrow-up-from-bracket  text-secondary" style="text-decoration: none"></i>
                    </a>
                </div>
        
            </div>
        </div>

        </li>`);
    }
}
export default PostItem;
const PostSummaryItem = (post) => {
    return (`
          <li class="list-group-item">
                <div class="row">
                    <div class="col-9 ">
                        <div class="h6 text-secondary fw-normal mb-0">${post.topic}</div>
                        <span class="h6 text-white fw-bold">${post.userName}</span>
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="h6 text-secondary fw-normal">- ${post.time}</span>
                        <h6 class="fw-bold">${post.title}</h6>
                    </div>
                    <div class="col-3 ">
                        <img class="rounded-4 float-end "
                             height="100"
                             width="100"
                             src="${post.image}">
                    </div>
                </div>
          </li>
  `);
};

export default PostSummaryItem;
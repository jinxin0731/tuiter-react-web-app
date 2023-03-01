import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11 mb-2">
                    <div class="position-relative d-flex align-content-start align-items-center">
                        <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter">
                        <span class="fa fa-search position-absolute ms-3" style="color: lightgrey"></span>
                    </div>
                </div>

                <div class="col-1 d-flex align-content-end">
                    <i class="fa-solid fa-gear fa-2x text-primary float-end "></i>
                </div>
           </div>
           
           <ul class="nav mb-2 nav-tabs">
                <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           
           <!-- image with overlaid text -->
            <div class="position-relative mb-2">
                <h3 class="position-absolute bottom-0 ps-2 fw-bold" style="color: #222222">SpaceX's Starship</h3>
                <img
                        class="w-100 h-100 "
                        src="../../images/starship.webp" >
            </div>
            
           ${PostSummaryList()}
           <div class="mb-3"></div>
    `);
}
export default ExploreComponent;

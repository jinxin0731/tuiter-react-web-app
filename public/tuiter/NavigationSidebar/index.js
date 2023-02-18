const NavigationSidebar = () => {
    return(`
    <div class="list-group">
        <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
        <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
        <a class="list-group-item" href="#">
            <div class="row">
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <i class="fa-solid fa-house"></i>
                </div>
                <div class="col-1 d-none d-xl-block">
                    <span>Home</span>
                </div>
            </div></a>
                    
        <a class="list-group-item active" href="#">
            <div class="row">
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <i class="fa-solid fa-hashtag"></i>
                </div>
                <div class="col-1 d-none d-xl-block">
                    Explore
                </div>
            </div></a>
    
        <a class="list-group-item" href="#">
            <div class="row">
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div class="col-1 d-none d-xl-block">
                    Notifications
                </div>
            </div></a>
    
        <a class="list-group-item" href="#">

            <div class="row">
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="col-1 d-none d-xl-block">
                    Messages
                </div>
            </div></a>
            
        <a class="list-group-item" href="#">
            <div class="row">
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <i class="fa-solid fa-bookmark"></i>
                </div>
                <div class="col-1 d-none d-xl-block">
                    Bookmarks
                </div>
            </div></a>
                        
        <a class="list-group-item" href="#">
            <div class="row">
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <i class="fa-solid fa-list"></i>
                </div>
                <div class="col-1 d-none d-xl-block">
                    Lists
                </div>
            </div></a>
                        
        <a class="list-group-item" href="#">
            <div class="row">
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="col-1 d-none d-xl-block">
                    Profile
                </div>
            </div></a>
                        
        <a class="list-group-item" href="#">

            <div class="row">
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div class="col-1 d-none d-xl-block">
                    More
                </div>
            </div></a>  
            
   </div>
   <div class="d-grid mt-2">
     <a href="#"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

    <div class="col-lg-12 head2">
        <div class="col-lg-10 col-lg-offset-1">

            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed navbar-toggle-custom" >
                        <span class="fa fa-align-justify"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img src="assets/img/logo.png" alt="logo" class="img-responsive" width="50" height="50"/>
                    </a>
                </div>
                <div id="navbar" class="navbar-collapse collapse navbar-collapse-custom">
                    <ul class="nav navbar-nav">
                        <li class="<?php echo isset($_GET['page'])? (($_GET['page'] === 'articel') ? 'active' : '') : "";?>"><a href="#">Articel</a></li>
                        <li class="<?php echo isset($_GET['page'])?(($_GET['page']==='video')? 'active':''):"" ;?>"><a href="index.php?page=video">Video</a></li>
                        <li><a href="index.php">Login</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </div>    
    </div>
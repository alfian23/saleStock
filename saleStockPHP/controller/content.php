<?php

    //    include header
    include 'model/header.php';
//    echo '<div class="row ">';

    //    include content
    if (!isset($_GET['page']) | empty($_GET['page'])) {
        include 'view/component/head.php';
        include 'view/component/side.php';
        include 'view/home.php';
    } else {
        include 'view/component/head2.php';
        if ($_GET['page'] == 'video') {
            include 'view/video.php';
        } elseif ($_GET['page'] == 'articel') {
            
            include 'view/articel.php';
        }
        include 'model/copyright.php';
    }


    //    include footer
    include 'model/footer.php';
//    echo '</div>';
?>
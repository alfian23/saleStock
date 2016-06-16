$(document).ready(function () {
    sidebar();
    hover();
    carousel();
    loginFB();
    onSignIn();
});

function sidebar() {
    isOpen = 0;
    $(".navbar-toggle-custom").click(function (e) {
        e.preventDefault();
        $('.navbar-collapse-custom').css({'z-index':'9999999'});
        $(".navbar-collapse-custom").toggle( 'drop', null, 500 );
        
    });
}
// ======= FACEBOOK LOGIN ==============
function loginFB() {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '238943079823962',
            channelUrl: 'http//:localhost.com',
            xfbml: true,
            status: true,
            viewMode: "website",
            version: 'v2.6',
            "autoRun": true


        });
        FB.getLoginStatus(function (responese) {
            if (responese.status === 'connected') {
//                document.getElementById('fb_status').innerHTML = 'NOT LOGINED';
                showAccountInfo();
//                document.location = "index.php?page=articel";
            } else if (responese.status === 'not_autorized') {
                document.getElementById('fb_status').innerHTML = '-';
            } else {
                document.getElementById('fb_status').innerHTML = '-';
            }
        });

    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $('#btnloginfb').click(function () {
        FB.login(function (response) {
            if (response.status === 'connected') {
                fb.fadeIn(500, function () {
                    $(this).html('Your Facebook is Logined').fadeOut(2000);
                });
                showAccountInfo();

            } else if (response.status === 'not_autorized') {
                fb.fadeIn(500, function () {
                    $(this).html('Facebook not Logined').fadeOut(2000);
                });

            } else {
                fb.fadeIn(500, function () {
                    $(this).html('Facebook not Into Logined').fadeOut(2000);
                });
            }
        }), {scope: 'email'};
    });
    function showAccountInfo() {
        FB.api('/me', 'GET', {fields: 'name,picture,email'}, function (response) {
//            alert(response.name);
//            console.log(response);
//            console.log('masuk ke fb api');
            document.getElementById('accountInfo').innerHTML = ('<img width="50px" height="50px" src="' + response.picture.data.url + '"><p> ' + response.name + '</p>');
        });
//        console.log('masuk ke sini');
        document.getElementById('loginBtn').innerHTML = '<div class="fb-login-button" data-max-rows="1" data-size="medium" data-auto-logout-link="true"></div>';
    }
    ;
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
//    console.log('Name: ' + profile.getName());
//    console.log('Image URL: ' + profile.getImageUrl());
    document.getElementById('accountgoogle').innerHTML = ('<img width="50px" height="50px" src="' + profile.getImageUrl() + '"><p> ' + profile.getName() + '</p>');
//    document.location = "index.php?page=articel";
}
function hover(){
    $('.thumb').hover(function (){
        console.log("ke hover");
        $(this).children('.overlay').animate({"left":"100px;"},100).fadeIn(200);
    },function (){
        $(this).children('.overlay').fadeOut(200);
    });
}
function carousel() {
    $('.carousel').carousel({
        interval: 0
    });
}
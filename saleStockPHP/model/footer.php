    <script src="assets/jquery-1.9.1.min.js"></script>
    <script src="assets/JqueryUI/jQueryUI1.11.4.js"></script>
    <script src="assets/bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="//platform.linkedin.com/in.js">
        api_key: 7527iwhw82shbq
        authorize: true
        onLoad: onLinkedInLoad
    </script>
    <script>
        function onLinkedInLoad() {
            IN.Event.on(IN, "auth", OnLinkedInAuth);
        }

        function OnLinkedInAuth() {
            IN.API.Profile("me").result(ShowProfileData);

        }
        function ShowProfileData(profiles) {
            var member = profiles.values[0];
            var id = member.id;
            var firstName = member.firstName;
            var lastName = member.lastName;
            var photo = member.pictureUrl;
            var headline = member.headline;

            document.getElementById('accountlingedin').innerHTML = ('<img width="50px" height="50px" src="' + photo + '"><p> ' + firstName +' ' + lastName+'</p>');
//            document.location = "index.php?page=articel";
       }
        loginFB();
        onSignIn();
    </script>
    <script src="assets/custom.js" type="text/javascript"></script>        

    
</body>
</html>

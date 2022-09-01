let button = document.getElementById('expand-profile-button'),

    expanded = false;



button.addEventListener('click', function ClickProfileButton () {

    let profileCard = document.getElementById('profile-card');

    let profileButtonIcon = document.getElementById('expand-profile-button');

   

    if(expanded){

        profileCard.style.display = 'none';

        profileButtonIcon.style.transform = 'rotate(360deg)';

        expanded = !expanded;

        console.log('expanded se tornou ' + expanded);

    }

    else{

        profileCard.style.display = 'block';

        profileButtonIcon.style.transform = 'rotate(180deg)';

        expanded = !expanded;

        console.log('expanded se tornou ' + expanded);

    }

});
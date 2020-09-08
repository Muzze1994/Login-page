const logInBtn = document.getElementById('logInBtn');
let inpUsername = document.getElementById('inpUsername');
let inpPassword = document.getElementById('inpPassword');
let logOutBtn = document.getElementById('logOutBtn');
let toLogIn = document.getElementById('toLogIn');

let filled = true;
let userName = "test";
let pass = 1234;

//Funktion för att dölja och visa hemsidor
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
  }

//Klickfunktion för att logga in på hemsidan som sparar input från username och password  
logInBtn.addEventListener('click', function(){
            
        let userInputName = inpUsername.value;
        let userInputPass = inpPassword.value;
           
        if (userInputName == userName && userInputPass == pass){

        localStorage.setItem('Username', inpUsername.value);
        localStorage.setItem('Password', inpPassword.value);

            
        document.getElementById('page1').style.display='none';
        return show('page2','page1');
        
        } 
   
            else  {

                document.getElementById('page1').style.display='none';
                return show('page3', 'page1')

            }
        });

//Klickfunktion som loggar ut användaren från sidan och tar bort lagrad data från localStorage
logOutBtn.addEventListener('click', function(){

    localStorage.clear();
    document.getElementById('page1').style.display='block';
    return show('page1','page2');
        

});

//Klickfunktion som tar tillbaka en till log-in sidan 
toLogIn.addEventListener('click', function(){

    document.getElementById('page1').style.display='block';
    document.getElementById('page3').style.display='none';
    return show('page1','page2');


});  

//Om användare redan angett användarnamn och lösenord ska han vara inloggad på välkomstsidan
if ('Username' && 'Password' in localStorage){

    document.getElementById('page1').style.display='none';
    document.getElementById('page2').style.display='block';
}
    

   

        
   
        



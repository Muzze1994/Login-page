const logInBtn = document.getElementById('logInBtn');
let inpUsername = document.getElementById('inpUsername');
let inpPassword = document.getElementById('inpPassword');
const logOutBtn = document.getElementById('logOutBtn');
const toLogInBtn = document.getElementById('toLogInBtn');

const userName = "test";
const pass = 1234;

//Funktion för att dölja och visa vyer
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

        
        //Visar page2 och gömmer page1
        return show('page2','page1');
        
        } 
   
            else  {

                //Visar page3 och gömmer page1
                return show('page3', 'page1')

            }
        });

//Klickfunktion som loggar ut användaren från sidan och tar bort lagrad data från localStorage
logOutBtn.addEventListener('click', function(){

    localStorage.clear();
    document.getElementById('page1').style.display='block';
    //Visar page1 och gömmer page2
    return show('page1','page2');
        

});

//Klickfunktion som tar tillbaka en till log-in sidan 
toLogInBtn.addEventListener('click', function(){

    //Visar page1 och gömmer page2
    return show('page1','page3');


});  

//Om användare redan angett användarnamn och lösenord ska han vara inloggad på välkomstsidan
if ('Username' && 'Password' in localStorage){

    document.getElementById('page1').style.display='none';
    document.getElementById('page2').style.display='block';
    
}
    

   

        
   
        




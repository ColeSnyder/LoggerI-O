// ALL FIREBASE INFO GOES HERE ******************************************************************************************

(function () { //this function loads as soon as page loads
    const config = { //setting up connection to the firebase DB
        apiKey: "AIzaSyA3JGscgdzANy5_gS_clTKeRPUUIfXwUVo",
        authDomain: "logger-io-51f54.firebaseapp.com",
        databaseURL: "https://logger-io-51f54.firebaseio.com",
        projectId: "logger-io-51f54",
        storageBucket: "logger-io-51f54.appspot.com",
        messagingSenderId: "152590496413" 
    };
    firebase.initializeApp(config); //initializing connection to DB

    const usernameInput = document.getElementById("usernameInput"); //grabs username input
    const passwordInput = document.getElementById("passwordInput"); //grabs password input
    const passwordInputDouble = document.getElementById("passwordInputDouble"); //grabs password re-entry input
    const loginAttempt = document.getElementById("pressToLogin"); //grabs value of login button
    const signupAttempt = document.getElementById("SignUpAttempt"); //grabs value of signup button

// LOGIN ATTEMPT*******************************************************************************************************

    if(loginAttempt) { //if we don't check for this, it errors out saying it can't be null. just leave it
        loginAttempt.addEventListener('click', e => { //event listener for when the login button is clicked

            const user = usernameInput.value; //grabs value of username input
            const pass = passwordInput.value; //grabs value of password input
            const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(user, pass); //firebase command for authenticating a user based off of the username/password inputs

            promise.catch(e => console.log(e.message)); //catch incase the username/password inputs don't authenticate

            checkState(); //calls the state check function declared below
        });
    }

// SIGN UP ATTEMPT******************************************************************************************************

    if(signupAttempt){ //if we don't check for this, it errors out saying it can't be null. just leave it
        signupAttempt.addEventListener('click', e => { //event listener for when the signup button is clicked

            const user = usernameInput.value; //grabs value of username input
            const pass = passwordInput.value; //grabs value of password input
            const passDouble = passwordInputDouble.value; //grabs value of re-entry password input
            const auth = firebase.auth();

            if (pass == passDouble){ //checking to make sure passwords are the same
                const promise = auth.createUserWithEmailAndPassword(user, pass); //firebase command for inputting a user based off of the username/password inputs

                promise.catch(e => console.log(e.message)); //catch incase the username/password inputs don't authenticate
            } else {
                document.getElementById("modal").style.height = "400px";
                document.getElementById("errorSigningUp").style.visibility = "visible";
                //alert("Passwords must match. Please try again");
            }
        });
    }

// STATE CHANGE LISTENER*************************************************************************************************
    
    function checkState() {
            firebase.auth().onAuthStateChanged(firebaseUser => { //fires when there has been a state change in the authentication
                if (firebaseUser) {
                    //THERE IS CURRENTLY A USER LOGGED IN 
                    console.log(firebaseUser);
                    window.location = './LoggerI:O.html'; //goes to main logger page if successful
                } else {
                    //THERE IS CURRENTLY NO USER LOGGED IN
                    document.getElementById("errorLoggingIn").style.visibility = "visible";
                    console.log("not logged in");
                }
            });
    }

// NEXT CONTENT GOES HERE************************************************************************************************
window.onbeforeunload = firebase.auth().signOut();
}());
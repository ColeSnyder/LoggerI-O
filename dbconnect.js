// ALL FIREBASE INFO GOES HERE *******************************************************************************************

(function () {
    const config = {
        apiKey: "AIzaSyA3JGscgdzANy5_gS_clTKeRPUUIfXwUVo",
        authDomain: "logger-io-51f54.firebaseapp.com",
        databaseURL: "https://logger-io-51f54.firebaseio.com",
        projectId: "logger-io-51f54",
        storageBucket: "logger-io-51f54.appspot.com",
        messagingSenderId: "152590496413" 
    };
    firebase.initializeApp(config);

    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
    const loginAttempt = document.getElementById("pressToLogin");
    const signupAttempt = document.getElementById("SignUpAttempt");

// LOGIN ATTEMPT******************************************************************************************************

    if(loginAttempt) {
        loginAttempt.addEventListener('click', e => {

            const user = usernameInput.value;
            const pass = passwordInput.value;

            const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(user, pass);

            promise.catch(e => console.log(e.message));
        });
    }

// SIGN UP ATTEMPT****************************************************************************************************

    if(signupAttempt){
        signupAttempt.addEventListener('click', e => {

            const user = usernameInput.value;
            const pass = passwordInput.value;

            const auth = firebase.auth();

            const promise = auth.createUserWithEmailAndPassword(user, pass);

            promise.catch(e => console.log(e.message));
        });
    }

// REAL TIME LISTENER*************************************************************************************************
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            window.location = './LoggerI:O.html';
        } else {
            console.log("not logged in");
        }
    });




    
}());
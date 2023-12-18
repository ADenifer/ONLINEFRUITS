

function validate() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (!username || !password) {
         alert("Please provide both username and password.");
        return false; // Prevent form submission
    }
    localStorage.setItem('loggedInUsername', username);
    return true; // Allow form submission
    // Set the username in localStorage
    

}

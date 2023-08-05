// Question.2 :- You are building a simple login system. Implement the login feature that has two variables: username and password. You should check if the username is "admin" and the password is "12345". If both conditions are true, print "Login sucessful"  otherwise, print "Invalid credentials."


function loginauthentication(username, password) {

    if(username === "admin" && password === "12345"){
        console.log("Login successful");
    }else{
        console.log("Invalid credentials.");
    }
}

loginauthentication("admin","12345")

// When you run this code, it will output:
// "Login successful"
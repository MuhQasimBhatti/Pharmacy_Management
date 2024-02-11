<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Hardcoded credentials for demonstration purposes
    $validEmail = "amnapervaiz@gmail.com";
    $validPassword = "password";

    // Retrieve user input
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Validate credentials
    if ($email == $validEmail && $password == $validPassword) {
        // Successful login
        echo "Login successful!";
        // You can redirect the user to another page here if needed
    } else {
        // Invalid credentials
        echo "Invalid email or password";
    }
}
?>

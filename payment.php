<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "21it0550"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $card_number = $_POST['card_number'];
    $expiry_date = $_POST['expiry_date'];
    $cvv = $_POST['cvv'];

    // SQL statement to insert payment details into the 'payments' table
    $sql = "INSERT INTO payments (card_number, expiry_date, cvv) VALUES ('$card_number', '$expiry_date', '$cvv')";

    if ($conn->query($sql) === TRUE) {
        echo "<h2>Payment Successful!</h2>";
        echo "<p>Card Number: $card_number</p>";
        echo "<p>Expiry Date: $expiry_date</p>";
        echo "<p>CVV: $cvv</p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Invalid Request!";
}

// Close the database connection
$conn->close();
?>

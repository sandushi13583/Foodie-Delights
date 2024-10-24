<?php
// MySQL database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "21it0550";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handling form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $customization = $_POST['customization'];

    // SQL query to insert product data into the database
    $sql = "INSERT INTO products (name, price, description, customization) VALUES ('$name', '$price', '$description', '$customization')";

    if ($conn->query($sql) === TRUE) {
        echo "Product added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

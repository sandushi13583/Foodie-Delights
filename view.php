<?php
$servername = "Localhost";
$username = "root";
$password = "";
$database = "21it0550";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$tableName = "login";

$sql = "INSERT INTO $tableName (u_id,username,name,nic,pass,conpassword)
        VALUES ('$_POST[User_id]','$_POST[Username]', '$_POST[Name]', '$_POST[NIC]','$_POST[Create_password]', '$_POST[Confirm_password]')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
    header('location:login.html');
} else {
    echo "Error inserting data: " . $conn->error;
}

// Close connection
$conn->close();
?>

<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $deliveryOption = $_POST["deliveryOption"];
    $address = $_POST["address"];
    $phone = $_POST["phone"];

    // Prepare and bind the insertion query
    $stmt = $conn->prepare("INSERT INTO orders (delivery_option, address, phone) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $deliveryOption, $address, $phone);

    if ($stmt->execute()) {
        echo "Order processed successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed!";
    }
}
?>
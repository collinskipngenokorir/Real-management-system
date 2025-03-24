<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);

  $name = $data['name'];
  $email = $data['email'];
  $message = $data['message'];

  // Example: Sending email to admin
  $adminEmail = 'admin@realestate.com';
  $subject = "New message from $name";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  if (mail($adminEmail, $subject, $body)) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false]);
  }
} else {
  echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}
?>

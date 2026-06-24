<?php 
include "connection.php";

$nome = $_POST['nome'];
$email = $_POST['email'];
$pass = $_POST['senha'];

try {
  mysqli_query($conn, "INSERT INTO usuario (nome, email, senha) VALUES ('$nome', '$email', '$pass')");
} catch (Exception $e) {
    echo $e;
}
?>

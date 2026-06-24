<?php 
$server = "localhost";
$user = "root";
$password = "root";
$database = "db_usuarios";
$port = 3307;

$conn = mysqli_connect($server, $user, $password, $database, $port);

$nome = $_POST['nome'];
$email = $_POST['email'];
$pass = $_POST['senha'];

try {
  mysqli_query($conn, "INSERT INTO usuario (nome, email, senha) VALUES ('$nome', '$email', '$pass')");
} catch (Exception $e) {
    echo $e;
}
?>

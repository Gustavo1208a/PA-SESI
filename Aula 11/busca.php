<?php 
include "connection.php";

$dados = mysqli_query($conn, "SELECT * FROM usuario");

print_r(mysqli_fetch_assoc($dados));

?>

<?php
    
    $conn = mysqli_connect("localhost", "root", "", "accountsdb");
    
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    
    if(!$conn){
        die("Connection failed" . mysqli_connect_error());
    }
        
    $sql = "INSERT INTO accounts (id, firstname, lastname, email, password) VALUES ('0', '$firstname', '$lastname',  '$email', '$password')";
        
    $rs = mysqli_query($conn, $sql);

    if($rs){
        echo "Account created!";
    }
    else{
        echo "Error $sql". mysqli_error($conn);
    }
    
    mysqli_close($conn);
?>
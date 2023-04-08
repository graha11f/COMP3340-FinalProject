<?php

    $conn= mysqli_connect("localhost","root", "", "accountsdb");

    $email = $_POST['matchemail'];
    $password = $_POST['matchpassword'];


    if(!$conn){
        die("Connection failed.".mysqli_connect_error());
    } 

    $sql = "SELECT * FROM accounts WHERE email = '$email' AND password = '$password'";
    
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        /*while($row = $result->fetch_assoc()){
            echo "id: ". $row["id"] . " - first name: " . $row["firstname"] . " - last name: " . $row["lastname"] ." - email: " . $row["email"] . " - password: " . $row["password"] . "<br>";
            //header("Location: index.html");
            
        }*/
        echo "Account found!";
    }
    else{
        echo "Incorrect email and/or password.";
    }
     
?>
    
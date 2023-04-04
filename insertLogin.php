<!DOCTYPE html>
<html>
 
    <head>
        <title>Insert Login</title>
    </head>
    
    <body>
        <?php

        $conn = mysqli_connect("localhost", "root", "", "dbacc");
            
        // Check connection
        if($conn === false){
            die("ERROR: Connection failed."
                . mysqli_connect_error());
        }
            
        // Taking all values from the form input
        $fname =  $_REQUEST['fname'];
        $lname = $_REQUEST['lname'];
        $email = $_REQUEST['email'];
            
        // Performing insert query execution
        $sql = "INSERT INTO account  VALUES ('$fname', '$lname',  '$email')";
            
        if(mysqli_query($conn, $sql)){
            echo "Success";

            echo nl2br("\n$fname \n$lname \n"
                    . "$email");
        } else{
            echo "Error $sql. "
                . mysqli_error($conn);
        }
            
        // Close connection
        mysqli_close($conn);
        ?>

    </body>
 
</html>
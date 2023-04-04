<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Create New Account</title>
   </head>
   <body>

        <form action="insertLogin.php" method="post">  
            <p>
               <label for="fname">First Name </label>
               <input type="text" name="fname" id="fname">
            </p>          
            <p>
               <label for="lname">Last Name </label>
               <input type="text" name="lname" id="lname">
            </p>
            <p>
               <label for="email">Email </label>
               <input type="text" name="email" id="email">
            </p>
 
            <input type="submit" value="Submit">
         </form>

   </body>
</html>
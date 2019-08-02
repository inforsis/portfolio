<?php
    $data = json_decode(file_get_contents("php://input"), TRUE);
    
    $name = $data['name'];
    $email = $data['email'];
    $message = wordwrap( $data['message'], 500, "<br />", 1);

    $for = 'inforsis@gmail.com';
    $subject = 'Portfolio [CONTATO]';

    $ip = getenv ("REMOTE_ADDR");

    $boundary = "XYZ-" . date("dmYis") . "-ZYX";
            
    $mens    = "--$boundary\n";
    $mens   .= "Content-Transfer-Encoding: 8bits\n";
    $mens   .= "Content-Type: text/html; charset=\"UTF-8\"\n\n"; //plain
    
    $mens   .= "Enviada pelo IP: $ip<br />\n";      
    $mens   .= "$message <br />\n";
    $mens   .= "--$boundary\n";

    $headers = "MIME-Version: 1.0\n";
    $headers .= "From: \"$name\" <$email>\r\n";
    $headers .= "Content-type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $headers .= "$boundary\n";
    
    //envia o email sem anexo
    if (mail($for,$subject,$mens,$headers)) {
      //enviado
      echo 'true';
    }
    else {
      //falha
      echo 'false';
    }
?>
<?php
require 'staticFiles/PHPMailer/PHPMailerAutoload.php';
extract($_GET);
// i will fetch from db
$qno = $_GET['qno'];
$challenge = $_GET['challenge'];
$commentByEval = $_GET['commentByEval'];
$marksGiven = $_GET['marksGiven'];
$maxMarks = $_GET['maxMarks'];
$evalEmail = $_GET['evalEmail'];
$body = "<div style=\"color:red;\"> U HAVE BEEN CHALLENGED FOR THE QUESTION NUMBER '$qno' </div>
<div style=\"color:red; border-bottom: 2px solid black\" > The student claims that-> '$challenge' </div>
<div style=\"color:blue\"> Marks Given by you <bold> '$marksGiven' </bold> out of a maximum marks of <bold> '$maxMarks'</bold>
<div style=\"color:blue\" > u have gievn this comment ->  '$commentByEval'      </div>";

//echo $body;
//echo $evalEmail;
//die();

$mail = new PHPMailer;
//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com;smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'livelikehimanshu12@gmail.com';                 // SMTP username
$mail->Password = '';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('livelikehimanshu12@gmail.com', 'REAP AUTOMATED SYSTEM');
$mail->addAddress($evalEmail, 'Joe User');     // Add a recipient
$mail->addAddress($evalEmail);               // Name is optional
$mail->addReplyTo('livelikehimanshu12@gmail.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'U have been challenged';
$mail->Body    = $body;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent. bad';
    var_dump('Mailer Error: ' . $mail->ErrorInfo);
} else {
    echo 'Email sent to the concerned Evaluator';
}

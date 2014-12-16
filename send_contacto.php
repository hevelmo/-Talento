<?php
	// Guardar los datos recibidos en variables:
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$mensaje = $_POST['mensaje'];

	$mail_origin = 'info@maztalentos.com';

	$to = 'info@maztalentos.com';
	//$to = 'ricardo@maztalentos.com;
	$subject = "Contacto maztalentos";

	$message   .= '<html>
						<head>
						<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

						<title>Comentario Web DKH : maztalentos</title>
						</head>

						<body>

							<table bgcolor="#FFFFFF">

						        <tr bgcolor="#FFFFFF" valign="top">
						        	<td align="left" height="200px">
										<p>Nombre: '.$nombre. '</p>
										<p>Correo: '.$email. '</p>
										<p>Mensaje: '.$mensaje. '</p>
									</td>
						      </tr>
						    </table>
						</body>
					</html>';

	$headers = 'From: ' . $mail_origin . " \r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	//$headers .= 'Bcc:  carbon@com.com' . "\r\n";

	$sent =  mail($to,$subject,$message,$headers);


	if($sent) {
		echo 'Envio Correcto';
	} else {
		echo 'Fallo el Envio';
	}
?>


<?php
//Telegram
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$title = $_POST['title'];
$token = "5609014405:AAEyu0ZB8T2W4ztCkd8Eq5OAaGWcSO6gGLc";
$chat_id = "-867983391";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  urldecode($_SERVER['HTTP_REFERER'])
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","");
// header('Location: http://matana.site/thanks.html');
?>

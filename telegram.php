<?php
 
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
 
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_mail'];
$comm = $_POST['comment']; 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1122936546:AAFX2goLcgvARa4YfsiBuso4tOV5yMVODGY";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-1001262368010";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя:' => $name,
  'Телефон:' => $phone,
  'Email:' => $email,
  '' => $comm
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}
?>
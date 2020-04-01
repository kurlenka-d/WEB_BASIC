<?php

$apiToken = "1122936546:AAFX2goLcgvARa4YfsiBuso4tOV5yMVODGY";

$filter_result = filter_input(INPUT_POST, 'comment', FILTER_SANITIZE_STRING);

$data = [
    'chat_id' => '-1001262368010',
    'text' => $filter_result,
];

$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data));

header('Location: /');

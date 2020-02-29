<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new client();

$response = $client->request('GET', 'http://localhost/rest_api/subaru_rest_server/api/mahasiswa', [
    'auth' => ['admin', '1234'],
    'query' => [
        'SUBARU-ACCESS-KEY' => 'SUBARU002'
    ]
]);

$data = json_decode($response->getBody()->getContents(), true);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Film API With Guzzle</title>
</head>

<body>
    <?php foreach ($data['data'] as $film) : ?>
        <ul>
            <li>Title: <?= $film['nrp']; ?></li>
            <li>Year: <?= $film['nama']; ?></li>
            <li>Year: <?= $film['email']; ?></li>
        </ul>
    <?php endforeach; ?>
</body>

</html>
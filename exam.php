<?php
    $type = $_GET['type'];
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css">
    <title>Examen</title>
</head>
<body>
    <div id="container">
        <header id="navbar">
            <nav class="navbar">
                <ul>
                    <li id="home"><a href="./index.html#home">Home</a></li>
                    <li id="getStarted"><a href="./index.html#startMenu">Get Started</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <p id="img_container" class=<?= $type ?>>
                <img id="exam_couv" src=<?= "./assets/img/" . $type . "/" . $type . "-couv.jPG" ?> alt="cover">
                <img hidden id="exam_img" src=<?= "./assets/img/" . $type . "/" . $type . "-1.jPG" ?> alt="exam_image">
            </p>
            <button id="start">Start</button>
            <form hidden id="exam_form" action='' name="B1-01">
                <label for="A">A</label>
                <input type="checkbox" name="A" id="A" title="A answer">
                <label for="B">B</label>
                <input type="checkbox" name="B" id="B" title="B answer">
                <label for="C">C</label>
                <input type="checkbox" name="C" id="C" title="C answer">
                <label for="D">D</label>
                <input type="checkbox" name="D" id="D" title="D answer">
                <button id="previous" name="previous"><p id="left_arrow_container"><img src="./assets/img/left_arrow.png" alt="go_left" id="left_arrow"></p></button>
                <button id="next" name="next"><p id="right_arrow_container"><img src="./assets/img/right_arrow.png" alt="go_left" id="right_arrow"></p></button>
            </form>
        </main>
    </div>
    <script src="./assets/driversLicence.js"></script>
</body>
</html>
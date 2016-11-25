<!doctype html>
<html>
  <head>
    <title> Adios </title>
    <link rel="stylesheet" type="text/css" href="orphan_style.css"/>
  </head>
  <body>
    <p> gud family: </p>

    <div id="orphan_container"></div>

    <script type="text/javascript" src="initialize.js"></script>
    <script type="text/javascript" src="loadEndPage.js"></script>
    <?php
       $x = $_GET["orphans"];
       echo "<script> loadEndPage('$x'); </script>";
       ?>
  </body>

</html>

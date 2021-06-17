<?php
  if($_POST['pass'] && $_POST['login']){
  	echo $_POST['login'];
  	echo "<br>";
  	echo $_POST['pass'];
  }
  else{
  	echo "False";
  }
?>
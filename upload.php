<?php
	$originalSizeDirectory = "./img/original/";
	$smallSizeDirectory = "./img/smallSize/";
	$originalFile = $originalSizeDirectory . basename($_FILES["fileToUpload"]["name"]);
	$smallSizeFile = $smallSizeDirectory . basename($_FILES["fileToUpload"]["name"]);
	$extension = strtolower(pathinfo($originalFile,PATHINFO_EXTENSION));
	$flag = 1;

	if(isset($_POST["submit"])) {
		$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
		$flag = ($check !== false) && ($extension == "jpeg" || $extension == "png" || $extension == "jpg");
	}
	if ($flag == 0) {
		echo "Файл не загружен.";
	} else {
		if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $originalFile)) {
			echo "Файл загружен.";
			if ($extension == 'png'){
				$image = imagecreatefrompng($originalFile);  
				$img = imagescale($image, 270, 300);
				imagepng($img, $smallSizeFile);
			} elseif ($extension == 'jpg' || $extension == 'jpeg') {
				$image = imagecreatefromjpeg($originalFile);  
				$img = imagescale($image, 270, 300);
				imagejpeg($img, $smallSizeFile);
			}
		}
	}
?>
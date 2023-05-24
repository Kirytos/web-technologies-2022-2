<!DOCTYPE html>
<html lang="ru">				

	<head>
		<title></title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>

	<body>
		<div>
			<form action="upload.php" method="post" enctype="multipart/form-data">
			Выберите картинку:
			<input type="file" name="fileToUpload" id="fileToUpload">
			<input type="submit" value="Отправить" name="submit">
			</form>
		</div>
		<div style="display:flex; justify-content:space-between; flex-wrap: wrap">
			<?php
				$smallSizeDirectory = "./img/smallSize";
				$images = getImages($smallSizeDirectory);
				echo $images; 
			?>
		</div>
	</body>
</html>

<?php
	function getImages($smallSizeDirectory) 
	{
		$files = array_slice(scandir($smallSizeDirectory),2);
		foreach ($files as $file) 
		{
			echo 
			"<div>
				<a href='$smallSizeDirectory/$file'>
					<img style='width:270px' src='$smallSizeDirectory/$file' />
				</a>
			</div>";
		}
	}
?>
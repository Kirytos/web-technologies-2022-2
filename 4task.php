<?php
	function getValuesForNavigation($regionValues) 
	{
		$result = "";
		foreach ($regionValues as $regionValue) 
		{
			if (is_array($regionValue)) {
				$result = $result."<li><ul>".getValuesForNavigation($regionValue)."</ul></li>";
			} else {
				$result = $result."<li>$regionValue</li>";
			}
		}
		return $result;
	}
?>

<!DOCTYPE html>
<html lang="ru">

	<head>
		<title>4 задание</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>

	<body>
		<ul>
			<?php
				$region = array(
					"Урал" => array("Екатеринбург", "Самара"),
					"Север" => array("Ханты-Манскийск", "Газ-Сале"),
					"Центр" => array("Москва", "Сантк-Петербург")
				);
				echo getValuesForNavigation($region); 
			?>
		</ul>
	</body>

</html>
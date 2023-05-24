<?php
	$region = array(
		"Урал" => array("Екатеринбург", "Самара"),
		"Центр" => array("Москва", "Сантк-Петербург"),
		"Север" => array("Ханты-Манскийск", "Газ-Сале")
	);

	foreach ($region as $district => $cities) 
	{
		echo $district."</br>";
		foreach ($cities as &$city) 
		{
			echo "$city, ";
		}
		echo "</br>";
	}
?>
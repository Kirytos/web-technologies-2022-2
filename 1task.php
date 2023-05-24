<?php

	function printNumbersWithParity($number) 
	{
		$counter = 0;
		do {
			$resultWord = "- ноль";
			if ($counter != 0) 
			{
				if ($counter % 2 == 0) {
					$resultWord = " - четное";
				} else {
					$resultWord = " - нечетное";
				}
			}
			echo $counter.$resultWord."<br/>";
			$counter++;
		} while ($counter <= $number);
	}

	printNumbersWithParity(15);

?>
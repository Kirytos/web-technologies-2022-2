<?php

	function converter($startWord) 
	{
		$convertLetters = array(
			"а" => "a","б" => "b","в" => "v","г" => "g","д" => "d","е" => "e",
			"ж" => "zh","з" => "z","и" => "i","й" => "y","к" => "k","л" => "i","м" => "m",
			"н" => "n","о" => "o","п" => "p","р" => "r","с" => "s","т" => "t","у" => "u",
			"ф" => "f","х" => "h","ц" => "c","ч" => "ch","ш" => "sh","щ" => "sh'","ъ" => "а",
			"ь" => "'","ю" => "yu","я" => "ya"
		);
		
		return strtr($startWord, $convertLetters);
	}

	echo converter("информатика");
?>
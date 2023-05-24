<?php
    //1
    $firstValue = 12;
    $SecondValue = -25;

    function FirstTask($firstVal, $secondVal)
    {
        if ($firstVal < 0 && $secondVal < 0)
        {
            return $firstVal * $secondVal;
        }
        if ($firstVal >= 0 && $secondVal >= 0)
        {
            return $firstVal - $secondVal;
        }
        return $firstVal + $secondVal;
    }

    $firstResult = FirstTask($firstValue, $SecondValue);
    echo "Первое задание: $firstResult <br/>";

    //2
    
    function SecondTask($val)
    {
        switch($val)
        {
            case 0:
                echo "0 ";
            case 1:
                echo "1 ";
            case 2:
                echo "2 ";
            case 3:
                echo "3 ";
            case 4:
                echo "4 ";
            case 5:
                echo "5 ";
            case 6:
                echo "6 ";
            case 7:
                echo "7 ";
            case 8:
                echo "8 ";
            case 9:
                echo "9 ";
            case 10:
                echo "10 ";
            case 11:
                echo "11 ";
            case 12:
                echo "12 ";
            case 13:
                echo "13 ";
            case 14:
                echo "14 ";
            case 15:
                echo "15 ";
        }
    }

    $secondTaskVal = 7;
    echo "Второе задание:";
    $secondResult = SecondTask($secondTaskVal);
    
    echo"</br>";
    

    //3
    function ThirdTaskDiff($firstVal, $secondVal)
    {
        return $firstVal - $secondVal;
    }

    function ThirdTaskSum($firstVal, $secondVal)
    {
        return $firstVal + $secondVal;
    }

    function ThirdTaskDiv($firstVal, $secondVal)
    {
        if ($secondVal == 0)
            return "Not a Number!";
        return $firstVal / $secondVal;
    }

    function ThirdTaskMul($firstVal, $secondVal)
    {
        return $firstVal * $secondVal;
    }

    $firstValThree = 11;
    $secondValThree = 4;

    $sumThree = ThirdTaskSum($firstValThree, $secondValThree);
    $diffThree = ThirdTaskDiff($firstValThree, $secondValThree);
    $divThree = ThirdTaskDiv($firstValThree, $secondValThree);
    $mulThree = ThirdTaskMul($firstValThree, $secondValThree);

    echo "Третье задание: <br/> 
    Сум: $sumThree, 
    Выч: $diffThree, 
    Дел: $divThree, 
    Умн: $mulThree 
    <br/>";

    //4
    function FourthTask($firstVal, $secondVal, $operation)
    {
        switch($operation)
        {
            case "-":
                return ThirdTaskDiff($firstVal, $secondVal);
                break;
            case "+":
                return ThirdTaskSum($firstVal, $secondVal);
                break;
            case "/":
                return ThirdTaskDiv($firstVal, $secondVal);
                break;
            case "*":
                return ThirdTaskMul($firstVal, $secondVal);
                break;
            default:
                echo "Undefined operation!";
        }
    }

    $firstValFour = 13;
    $secondValFour = 3;

    $sumFour = FourthTask($firstValFour, $secondValFour, "+");
    $diffFour = FourthTask($firstValFour, $secondValFour, "-");
    $difFour = FourthTask($firstValFour, $secondValFour, "/");
    $mulFour = FourthTask($firstValFour, $secondValFour, "+");

    echo "Четвертое задание: <br/>
    Сум: $sumFour, 
    Выч: $diffFour, 
    Дел: $difFour, 
    Умн: $mulFour
    <br/>";

    //5
    $val5 = file_get_contents("./index.html");
    $val5 = str_replace("{{ h3change }}", "ChangePartOne", $val5);
    $val5 = str_replace("{{ currentTime }}", date("Y") . " " . (new DateTime())->format("Y") . " " . strftime("%Y"), $val5);
    echo("Пятое задание: <br/>$val5<br/>");

    //6
    function SixthTask($val, $degree)
    {
        if ($degree == 1)
            return $val;
        return $val * SixthTask($val, $degree-1);
    }

    $sixResult = SixthTask(4, 2);
    echo "Шестое задание: $sixResult";
?>
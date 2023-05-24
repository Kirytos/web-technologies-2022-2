<?php
    function getCurrentTime($valDate) {
        $minutes = intval(explode(":", $valDate)[1]);
        $hours = intval(explode(":", $valDate)[0]);
        $results = array(
            "hours" => null,
            "minutes" => null,
        );
        
        if (strlen($minutes) == 1) {
            $results["minutes"] = getMinutesFirstCategory($minutes);
        } else {
            if ("$minutes"[0] == "1") {
                $results["minutes"] = "минут";
            } else {
                $results["minutes"] = getMinutesFirstCategory("$minutes"[1]);
            }
        }

        if (strlen($hours) == 1) {
            $results["hours"] = getHoursFirstCategory($hours);
        } else {
            if ("$hours"[0] == "1") {
                $results["hours"] = "часов";
            } else {
                $results["hours"] = getMinutesFirstCategory("$hours"[1]);
            }
        }
        return $hours." ".$results["hours"]." ".$minutes." ".$results["minutes"];
    }

    function getMinutesFirstCategory($minutes) {
        if ($minutes == "1") {
            return "минута";
        } elseif ($minutes == "2" || $minutes == "3" || $minutes == "4") {
            return "минуты";
        }
        return "минут";
    }

    function getHoursFirstCategory($hours) {
        if ($hours == "1") {
            return "час";
        } elseif ($hours == "2" || $hours == "3" || $hours == "4") {
            return "часа";
        }
        return "часов";
    }

    $result = file_get_contents("./index.html");
    $result = str_replace("{{ changeTitle }}", "Измененный тайтл", $result);
    $result = str_replace("{{ changeHeading }}", "Новый заголовок", $result);
    $result = str_replace("{{ currentTimeValue }}", "".getCurrentTime(date("H:i")), $result);
    echo($result);
?>
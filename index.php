<?php

function getDbConnectConnect()
{
	$host = "localhost";
	$port = "5432";
	$dbname = "weblab20";
	$user = "postgres";
	$password = "0077";
	$db_connect = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
	return $db_connect;
}

function executeSQL($sql){
	$query = pg_query(getDbConnectConnect(), $sql);
	$fetchAll = pg_fetch_all($query);
	return $fetchAll;
}

function getTreeFromDb()
{
	$sql = "SELECT * FROM \"mainTable\"";
	return executeSQL($sql);
}

function formTree($data, $parent)
{
	foreach ($data as $item) {
		if ($item["Parent"] == $parent) {
			echo '<div class="list-item list-item_open" data-parent>';
			echo '<div class="list-item__inner">';
			if (hasChildren($data, $item["Id"])) {
				echo '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>';
			} else {
				echo '<div style="width: 20px;"></div>';
			}
			echo '<img class="list-item__folder" src="img/folder.png" alt="folder">';
			echo '<div>' . $item["Name"] . '</div>';
			echo '</div>';
			echo '<div class="list-item__items">';
			formTree($data, $item["Id"]);
			echo '</div>';
			echo '</div>';
		}
	}
}

function hasChildren($data, $id){
	foreach($data as $element) {
		if ($element["Parent"] == $id) {
			return true;
		}
	}
	return false;
}

?>

<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>20 задание WEB</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<div class="list-items" id="list-items">
		<?php echo (formTree(getTreeFromDb(), null)); ?>
	</div>
	<script type="module" src="script.js"></script>
</body>

</html>

<?php
//red is 8
//blue is 9
//green is 7
                $conn = new mysqli('localhost','mghera','20M@tt02','holocron');
                $conn->query("UPDATE holocronStatus SET Enabled='motor' WHERE 0= 0");

                system ( "gpio mode 21 out" );
		        system ("gpio write 21 0");
                header("Location:http://aquanet.ddnsfree.com/#/HolocronPage");
?>



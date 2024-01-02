<?php
//red is 8
//blue is 9
//green is 7
                $conn = new mysqli('localhost','mghera','20M@tt02','holocron');
                $conn->query("UPDATE holocronStatus SET Enabled='cyan' WHERE 0= 0");
                system ( "gpio mode 21 out" );
                system ( "gpio write 21 1" );
                system ( "gpio mode 8 out" );
                system ( "gpio write 8 1" );

                system ( "gpio mode 7 out" );
                system ( "gpio write 7 0" );
                system ( "gpio mode 9 out" );
                system ( "gpio write 9 0" );
                sleep(5);
                system ( "gpio write 21 0" );
                header("Location:http://seanet.asuscomm.com/#/HolocronPage");
?>



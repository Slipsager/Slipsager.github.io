<!DOCTYPE html>
<html>
    <head>
      <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
    </head>
    <body>
      <p>
        <!-- http://localhost:8888/PHP/OOP1.php -->
        <?php

        class Person {
            // properties
            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;

            // constructor function that takes 3 parameters
            public function __construct( $firstname, $lastname, $age){
                $this->firstname = $firstname;
                $this->lastname = $lastname;
                $this->age = $age;
            }

            // method
            public function greet( ){
                return "<p style=' '>Hello, my name is ". $this->firstname .
                " " . $this->lastname . ". Nice to meet you! :-) </p>";
            }

        }

        // Make instances of Person objects

        $teacher = new Person("boring","12345",12345);
        $student = new Person("Bjarne","Slipsager",46);


        echo $teacher->greet();


        echo $student->greet();


        ?>
      </p>
    </body>
</html>

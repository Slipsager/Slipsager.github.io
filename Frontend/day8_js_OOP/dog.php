<!DOCTYPE html>
<html>
	<head>
	  <title> Practice makes perfect! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <!-- Your code here -->
        <?php
        
        class Dog{
            public $numLegs = 4;
            public $name;
            
            public function __construct($name ){
                $this->name = $name;
            }
            public function bark(){
                echo "Vov <br />";
            }
            
            public function greet(){
                echo "<p style='color:red' >Hello my name is " . $this->name."</p>";
            }
        
        }
        
        $dog1 = new Dog("Pluto");
        
        $dog1->greet();
        
        $dog1->bark();
        
        ?>
      </p>
    </body>
</html>
<?php

include 'Database.class.php';

class User extends Database {

    private $userName;
    private $userPassword;

    public function __construct(string $userName = '', string $userPassword = '') {
        $this->userName = $userName;
        $this->userPassword = $userPassword;
    }

    public function login() {

		$sql = 'SELECT id, password FROM admin_users WHERE username = ?';
		$stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->userName]);
        
        if($stmt->rowCount() > 0) {

            while($row = $stmt->fetch()) {
                if(password_verify($this->userPassword, $row['password'])){ 
                    $data[] = array('status' => 'success', 'message' => 'The login was succesfull', 'id' => $row['id'], 'name' => $this->userName);
                }
                else {
                    $data[] = array('status' => 'error', 'message' => 'The username or password is incorrect');
                } 
            }
        } else {
           $data[] = array('status' => 'error', 'message' => 'The username or password is incorrect'); 
        }
        
        return $data;
    }

    public function register($userPasswordTwo) {
        $db = $this->connect();

        $sql = 'SELECT id FROM admin_users WHERE username = ?';
        $stmt = $db->prepare($sql);
        $stmt->execute([$this->userName]);

        if($stmt->rowCount() < 1) {

			if($this->userPassword == $userPasswordTwo){
				$pw = password_hash($this->userPassword, PASSWORD_DEFAULT);
				$sql = 'INSERT INTO admin_users (username, password) VALUES (?,?)';
				$stmt = $db->prepare($sql);
				$stmt->execute([$this->userName, $pw]);
				
				$id = $db->lastInsertId();
				
				$data[] = array('status' => 'success', 'message' => 'The user was succesfully created');
				
			} else {
				$data[] = array('status' => 'error', 'message' => 'The passwords didnt match');
			}
		
		} else {
			$data[] = array('status' => 'error', 'message' => 'The username is already in use');
        }
        
        return json_encode($data);
    }
}
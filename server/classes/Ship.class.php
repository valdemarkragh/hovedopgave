<?php

include 'Database.class.php';

class Ship extends Database {

    public $title;
    public $details;
    public $price;
    public $image;
    public $imageUrl;

    public function __construct(string $title = '', string $details = '', int $price = 0, string $image = '', string $imageUrl = 'http://localhost/php/exam/server/images/') {
        $this->title = htmlspecialchars_decode($title, ENT_QUOTES);
        $this->details = htmlspecialchars_decode($details, ENT_QUOTES);
        $this->price = $price;
        $this->image = $image;
        $this->imageUrl = $imageUrl;
    }

    public function fetchShips() {
        $sql = 'SELECT * FROM ships';
        $stmt = $this->connect()->query($sql);
        $stmt->execute();
        
        if($stmt->rowCount() > 0) {
            while($row = $stmt->fetch()) {

                $data[] = array(
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'url' => $row['url_title'],
                    'short_detail' => $row['short_detail'],
                    'price' => $row['price'],
                    'image' => $row['image'],
                    'image_src' => $this->imageUrl . $row['image']
                );
            }
        } else {
            $data[] = array('message' => 'no records found!');
        }
        

        return json_encode($data);
    }

    public function fetchSingleShip($id) {
        $sql = 'SELECT * FROM ships WHERE id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);

        if($stmt->rowCount() > 0) {
            while($row = $stmt->fetch()) {

                $data[] = array(
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'url' => $row['url_title'],
                    'details' => $row['details'],
                    'price' => $row['price'],
                    'image' => $row['image'],
                    'image_src' => $this->imageUrl . $row['image']
                );
            }
        } else {
            $data[] = array('message' => 'no records found!');
        }

        return json_encode($data);
    }

    public function addShip() {
        $url = str_replace(' ', '-', $this->title);

        if(strlen($this->details) > 110) {
            $short_detail = substr($this->details,0,107).'...'; 
        } else {
            $short_detail = $this->details;
        }

        $sql = 'SELECT title FROM ships WHERE title = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->title]);

        if($stmt->rowCount() > 0) {
            return json_encode(array('error' => true, 'message' => 'Du har allerede et skib med det navn!'));
        } else {
            $sql = 
            'INSERT INTO ships (title, url_title, details, short_detail, price, image) 
            VALUES (?, ?, ?, ?, ?, ?)';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$this->title, $url, $this->details, $short_detail, $this->price, $this->image]);

            if($stmt) {
                return json_encode(array('message' => 'Tilføjet!'));
            } else {
                return json_encode(array('error' => true, 'message' => 'Noget gik galt!'));
            }
        }
    }

    public function editShip($id) {

        $url = str_replace(' ', '-', $this->title);

        if(strlen($this->details) > 110) {
            $short_detail = substr($this->details,0,107).'...'; 
        } else {
            $short_detail = $this->details;
        }

        $sql =
        'UPDATE ships 
        SET title = ?, url_title = ?, details = ?, short_detail = ?, price = ?, image = ?
        WHERE id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->title, $url, $this->details, $short_detail, $this->price, $this->image, $id]);

        if($stmt) {
            return true;
        } else {
            return false;
        }
    }

    

    public function deleteShip($id) {
        $sql = 
        'DELETE FROM ships WHERE id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);

        if($stmt) {
            return true;
        } else {
            return false;
        }
    }
}
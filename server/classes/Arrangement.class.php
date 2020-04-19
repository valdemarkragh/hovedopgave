<?php

include 'Database.class.php';

class Arrangement extends Database {

    public $title;
    public $details;
    public $image;
    public $imageUrl;

    public function __construct(string $title = '', string $details = '', string $image = '', string $imageUrl = 'http://vkragh.one/server/images/') {
        $this->title = htmlspecialchars_decode($title, ENT_QUOTES);
        $this->details = htmlspecialchars_decode($details, ENT_QUOTES);
        $this->image = $image;
        $this->imageUrl = $imageUrl;
    }

    public function fetchArrangements() {
        $sql = 'SELECT * FROM arrangements';
        $stmt = $this->connect()->query($sql);

        if($stmt->rowCount() > 0) {
            while($row = $stmt->fetch()) {

                $data[] = array(
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'short_detail' => $row['short_detail'],
                    'image' => $row['image'],
                    'image_src' => $this->imageUrl . $row['image']
                );
            }
        } else {
            $data[] = array('message' => 'no records found!');
        }

        return json_encode($data);
    }

    public function fetchSingleArrangement($id) {
        $sql = 'SELECT * FROM arrangements WHERE id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);

        if($stmt->rowCount() > 0) {
            while($row = $stmt->fetch()) {

                $data[] = array(
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'details' => $row['details'],
                    'image' => $row['image'],
                    'image_src' => $this->imageUrl . $row['image']
                );
            }
        } else {
            $data[] = array('message' => 'no records found!');
        }

        return json_encode($data);
    }

    public function fetchArrangementsOnShipId($shipId) {
        $sql = 
        'SELECT arrangements.id, arrangements.title, arrangements.short_detail, arrangements.image 
        FROM arrangements 
        INNER JOIN arrangementsbyships 
        ON arrangements.id = arrangementsbyships.arrangement_id
        WHERE arrangementsbyships.ship_id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$shipId]);

        if($stmt->rowCount() > 0) {
            while($row = $stmt->fetch()) {

                $data[] = array(
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'short_detail' => $row['short_detail'],
                    'image' => $row['image'],
                    'image_src' => $this->imageUrl . $row['image']
                );
            }
        } else {
            $data[] = array('message' => 'no records found!');
        }

        return json_encode($data);
    }

    public function addArrangement() {
        $db = $this->connect();

        if(strlen($this->details) > 110) {
            $short_detail = substr($this->details,0,107).'...'; 
        } else {
            $short_detail = $this->details;
        }

        $sql = 
        'INSERT INTO arrangements (title, details, short_detail, image) 
        VALUES (?, ?, ?, ?)';
        $stmt = $db->prepare($sql);
        $stmt->execute([$this->title, $this->details, $short_detail, $this->image]);
        $arrangementId = $db->lastInsertId();

        if($stmt) {
            return json_encode(array('message' => 'Tilføjet!', 'arrangementId' => $arrangementId));
        } else {
            return json_encode(array('message' => 'Noget gik galt!'));
        }
    }

    public function joinArrangementOnShips($shipId, $arrangementId) {
        $sql = 'INSERT INTO arrangementsbyships (ship_id, arrangement_id) VALUES (?, ?)';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$shipId, $arrangementId]);
    }

    public function editArrangement($id) {
        $url = str_replace(' ', '-', $this->title);

        if(strlen($this->details) > 110) {
            $short_detail = substr($this->details,0,107).'...'; 
        } else {
            $short_detail = $this->details;
        }

        $sql =
        'UPDATE arrangements 
        SET title = ?, details = ?, short_detail = ?, image = ?
        WHERE id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->title, $this->details, $short_detail, $this->image, $id]);

        if($stmt) {
            return true;
        } else {
            return false;
        }
    }

    public function deleteArrangementOnShips($arrangementId) {
        $sql = 'DELETE FROM arrangementsbyships WHERE arrangement_id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$arrangementId]);

        if($stmt) {
            return true;
        } else {
            return false;
        }
    }

    public function deleteArrangement($id) {
        $sql = 
        'DELETE FROM arrangements WHERE id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);

        if($stmt) {
            $this->deleteArrangementOnShips($id);
            return true;
        } else {
            return false;
        }
    }
}
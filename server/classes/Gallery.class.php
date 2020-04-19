<?php

include 'Database.class.php';

class Gallery extends Database {

    public $image;
    public $caption;
    public $imageUrl;

    public function __construct(string $image = '', string $caption = '', $imageUrl = 'http://localhost/php/exam/server/images/') {
        $this->image = $image;
        $this->caption = $caption;
        $this->imageUrl = $imageUrl;
    }

    public function addImage() {
        $sql = 'INSERT INTO gallery (image, caption) VALUES (?, ?)';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->image, $this->caption]);

        if($stmt) {
            return json_encode(array('message' => 'Tilføjet!'));
        } else {
            return json_encode(array('message' => 'Noget gik galt!'));
        }
    }

    public function fetchImages() {
        
        $sql = 'SELECT * FROM gallery';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            while($row = $stmt->fetch()) {

                $data[] = array(
                    'id' => $row['id'],
                    'src' => $this->imageUrl . $row['image'],
                    'thumbnail' => $this->imageUrl . $row['image'],
                    'thumbnailWidth' => 320,
                    'thumbnailHeight' => 174,
                    'caption' => $row['caption'],
                    'date' => $row['date']
                );
            }
        } else {
            $data[] = array('message' => 'no records found!');
        }

        return json_encode($data);
    }

    public function deleteImage($id) {
        $sql = 
        'DELETE FROM gallery WHERE id = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);
    
        if($stmt) {
            return true;
        } else {
            return false;
        }
    }

}
<?php

class ImageUpload {

    public $exts = array( ".png", ".gif", ".png", ".jpg", ".jpeg" );
	public $maxSize = 9999999;
	public $uploadTarget = "../../images/";
	public $fileName = "";
	public $tmpName = ""; 

    public function startUpload() {
		$this->fileName = $_FILES['image']['name'];
		$this->tmpName = $_FILES['image']['tmp_name'];

		if( !$this->isWritable() ) {
            $message = array('message' => 'Fildestinationen findes ikke!');
            return json_encode($message);
            die();
		}
		if( !$this->checkExt() ) {
            $message = array('message' => 'Du kan desværre ikke uploade denne billedtype');
            return json_encode($message);
            die();
		}
		if( !$this->checkSize() ) {
            $message = array('message' => 'Filstørrelsen er for stor');
            return json_encode($message);
            die();
		}
		if( $this->uploadIt() ) {
            return true;
		} else {
            $message = array('message' => 'Upload mislykkedes af ukendte årsager');
            return json_encode($message);
            die();
		}
	}
	
	public function uploadIt() {
		$fileUpload = $this->uploadTarget . $this->fileName;
		return ( move_uploaded_file( $this->tmpName, $fileUpload ) ? true : false );
	}
	
	public function checkSize() {
		return ( ( filesize( $this->tmpName ) > $this->maxSize ) ? false : true );
	}
	
	public function getExt() {
		return strtolower( substr( $this->fileName, strpos( $this->fileName, "." ), strlen( $this->fileName ) - 1 ) );
	}
	
	public function checkExt() {
		return ( in_array( $this->getExt(), $this->exts ) ? true : false );
	}
	
	public function isWritable() {
		return ( is_writable( $this->uploadTarget ) );
	}
	
	public function fileExists() {
		$fileExists = $this->uploadTarget . $this->fileName;
		return ( file_exists( $fileExists) );
	}
    

}
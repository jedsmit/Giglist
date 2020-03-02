import React from "react";
import Button from "react-bootstrap/Button";



function ModalButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ModalButton>
        show={modalShow}
        onHide={() => setModalShow(false)}
      </ModalButton>
    </div>
  );
}

export default ModalButton;
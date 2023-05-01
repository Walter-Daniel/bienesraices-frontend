import { useState } from "react";
import { Button, Col, Row } from "antd";
import { ModalEstate } from "../components";

export const Administration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  return (
    <>
      <Row justify="center">
        <Col >
          <h2>Mis Propiedades</h2>
            <Button type="primary" className="btn-primary btn-modal1" onClick={showModal}>
              Publicar Propiedades
            </Button>
        </Col>
      </Row>
      <ModalEstate setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
    </>
  )
}

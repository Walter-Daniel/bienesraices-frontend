import { useState } from "react";
import { Button } from "antd";
import { ModalEstate } from "../components";


export const Administration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  return (
    <>
        <h1>Bienvenidos a Bienes Raices - Tucumám</h1>
        <Button type="primary" className="btn-primary" onClick={showModal}>
         Publicar Propiedades
        </Button>
        <ModalEstate setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
    </>
  )
}

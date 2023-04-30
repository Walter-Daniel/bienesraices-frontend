import { FormEstate } from "./FormEstate";
import { Modal } from "antd";


export const ModalEstate = ({ isModalOpen, setIsModalOpen }) => {
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

  return (
    <>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <FormEstate />
        </Modal>
    </>
  )
}

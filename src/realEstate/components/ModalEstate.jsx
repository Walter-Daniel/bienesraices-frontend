import { useForm } from "antd/es/form/Form";
import { FormEstate } from "./FormEstate";
import { Modal } from "antd";


export const ModalEstate = ({ isModalOpen, setIsModalOpen }) => {
  
    // const handleOk = () => {
    //   setIsModalOpen(false);
    // };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const [form] = useForm();

    const onCreate = (values) => {
      console.log('Received values of form: ', values);
      setIsModalOpen(false);
    };

  return (
    <>
        <Modal title="Propiedad en venta" 
               open={isModalOpen} 
               onCancel={handleCancel}
               onOk={() => {
                form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
              }}>
            <FormEstate form={form}/>
        </Modal>
    </>
  )
}

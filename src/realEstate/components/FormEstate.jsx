import { DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';

export const FormEstate = ({form}) => {
  
  return (
    <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="title"
          label="Título"
          rules={[
            {
              required: true,
              message: 'Por favor, ingrese el título del anuncio.'
            },
          ]}
        >
          <Input placeholder='3 Amb Todo Externo con Balcón - ¡Oportunidad!'/>
        </Form.Item>
        <Form.Item
          name="category"
          label="Categoría"
          rules={[
            {
              required: true,
              message: 'Por favor, seleccione una categoría.'
            },
          ]}
        >
          <Select placeholder='--- Seleccione una categoría ---'>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='price'
          label= 'Precio'
          rules={[{ 
              required: true, 
              message: "Por favor, ingrese el precio de la propiedad",
              pattern: new RegExp(/^[0-9]+$/)
          }]}
        >
          <Input
              placeholder='$9999'
              maxLength={12}
              addonBefore={
                  <Form.Item
                    name='currency'
                    noStyle
                    style={{
                      width: 70,
                    }}
                    rules={[
                      {
                        required: true,
                        message: 'Por favor, seleccione un tipo de moneda'
                      }
                    ]}
                  >
                    <Select placeholder='--- Seleccione una moneda ---'>
                      <Select.Option value='peso'>Pesos - $</Select.Option>
                      <Select.Option value="dollar">USD - $</Select.Option>
                      <Select.Option value="euro">EUR - €</Select.Option>
                    </Select>
                  </Form.Item>
              }
              style={{
                width: '100%',
              }}
          />
        </Form.Item>
        <Form.Item 
          name="description" 
          label="Description"
          rules={[
            {
              required: true,
              message: 'Por favor, ingrese información sobre la propiedad'
            }
          ]}>
          <Input type="textarea" />
        </Form.Item>
        
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Público</Radio>
            <Radio value="private">Privado</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
  )
}

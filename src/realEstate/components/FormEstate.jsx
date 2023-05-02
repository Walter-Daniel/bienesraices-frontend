import { Button, Col, Form, Input, Radio, Row, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export const FormEstate = ({form}) => {

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
  return (
    <Form
      form={form}
      layout="vertical"
      name="form_in_modal"
      initialValues={{
        modifier: "public",
      }}
    >
      <Form.Item
        name="title"
        label="Título"
        rules={[
          {
            required: true,
            message: "Por favor, ingrese el título del anuncio.",
          },
        ]}
      >
        <Input placeholder="3 Amb Todo Externo con Balcón - ¡Oportunidad!" />
      </Form.Item>
      <Row justify={{ sm: 'none', lg: 'space-between' }}>
        <Col xs={24} lg={11}>
          <Form.Item
            name="category"
            label="Categoría"
            rules={[
              {
                required: true,
                message: "Por favor, seleccione una categoría.",
              },
            ]}
          >
            <Select placeholder="- Seleccione -">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={11}>
          <Form.Item
            name="price"
            label="Precio"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el precio de la propiedad",
                pattern: new RegExp(/^[0-9]+$/),
              },
              {
                pattern: RegExp(/^[1-9]\d{4,}$/),
                message: 'El precio debe ser mayor o igual a 10000'
              }
            ]}
          >
            <Input
              placeholder="9999"
              maxLength={12}
              addonBefore={
                <Form.Item
                  name="currency"
                  noStyle
                  style={{
                    width: 30,
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Por favor, seleccione un tipo de moneda",
                    },
                  ]}
                >
                  <Select placeholder="- Moneda -">
                    <Select.Option value="peso">ARS</Select.Option>
                    <Select.Option value="dollar">USD</Select.Option>
                    <Select.Option value="euro">EUR</Select.Option>
                  </Select>
                </Form.Item>
              }
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={{ sm: 'none', lg: 'space-between' }}>
        <Col xs={24} lg={11}>
          <Form.Item
            name='size'
            label='Tamaño'
            extra='En metros cuadrados'
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el tamaño de la propiedad",
              },
              {
                pattern: new RegExp(/^[1-9]\d*$/),
                message: 'Ingresar un número mayor a 0'
              }
            ]}     
          >
            <Input placeholder='70' maxLength={3}/>
          </Form.Item>
        </Col>
        <Col xs={24} lg={11}>
          <Form.Item
            name='bathroom'
            label='Habitaciones'
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el número de habitaciones",
              },
              {
                pattern: new RegExp(/^[1-9]\d*$/),
                message: 'Ingresar un número mayor a 0'
              }
            ]} 
          >
            <Input placeholder='2' maxLength={1} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={{ sm: 'none', lg: 'space-between' }}>
        <Col xs={24} lg={11}>
          <Form.Item
            name='bedroom'
            label='Baños'
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el número de baños",
              },
              {
                pattern: new RegExp(/^[1-9]\d*$/),
                message: 'Ingresar un número mayor a 0'
              }
            ]}   
          >
            <Input placeholder='1' maxLength={1}/>
          </Form.Item>
        </Col>
        <Col xs={24} lg={11}>
        <Form.Item
          name="upload"
          label="Subir Imagen"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" listType="picture">
            <Button icon={<UploadOutlined />}>Subir Imagen</Button>
          </Upload>
        </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Por favor, ingrese información sobre la propiedad",
          },
        ]}
      >
        <Input type="textarea" />
      </Form.Item>

      <Form.Item
        name="modifier"
        className="collection-create-form_last-form-item"
      >
        <Radio.Group>
          <Radio value="public">Público</Radio>
          <Radio value="private">Privado</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
}

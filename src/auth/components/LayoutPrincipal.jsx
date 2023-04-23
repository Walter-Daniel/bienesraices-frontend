import { Col, Row } from 'antd';


export const LayoutPrincipal = ({ children, title }) => {

  return (
    <>
      <div className="container-fluid">
        <figure className='bg-principal-layout'>
          <img src="https://res.cloudinary.com/journal-project/image/upload/v1682283295/vewxzeuuotsg16jzoi2k.jpg" alt="Casa Amarilla 3D" />
        </figure>
          <Row justify="center" align="center" className="login-container">
            <Col xs={20} md={16} lg={10} className='login-form'>
              <h1>Bienes<span>Raices</span></h1>
                <h2>{ title }</h2>
              <div className="last-container">
                { children }
              </div>
            </Col>
          </Row>
      </div>
    </>
  )
}

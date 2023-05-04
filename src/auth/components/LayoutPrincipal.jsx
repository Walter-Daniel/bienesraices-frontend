import { Col, Row } from 'antd';

export const LayoutPrincipal = ({ children, title }) => {

  return (
    <>
      <div className="container-fluid">
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
};

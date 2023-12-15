import { Container, Navbar, Nav } from 'react-bootstrap'
import logoImage from '../../images/coffee.jpg'
import glass from '../../icons/magnifying-glass.svg'

function Header() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">LOG IN</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">CART</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">MESSAGE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">English</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">TWD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <img src={glass} alt="glass" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <p className="text-center mt-4 mb-4">Or right-aligned</p> */}
      <Navbar expand="lg" style={{ borderBottom: '1px solid #dee2e6' }}>
        <Container className="d-flex justify-content-between">
          {/* Logo 靠左对齐 */}
          <Navbar.Brand href="#home" >
            <img
              src={logoImage}
              width="150" // 设置适当的尺寸
              height="150"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          {/* 导航项居中对齐 */}
          <Nav className="flex-grow-1 justify-content-end flex-wrap">
            <Nav.Item>
              <Nav.Link href="/home">Shop All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">本月新品</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">夏日風</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">限時優惠</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">熱銷商品</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">現貨商品區</Nav.Link>
            </Nav.Item>
            <Nav.Item className="w-100 d-block"></Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Return Policy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">Terms And Conditions</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* 占位元素，确保导航项居中 */}
          <div className="flex-grow-1"></div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
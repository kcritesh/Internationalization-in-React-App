import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import LocaleContext from "../LocaleContext";

function Navigation() {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale(lang) {
    if (locale !== lang) {
      i18n.changeLanguage(lang);
    }
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">React i18n</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={t("language")} id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={() => changeLocale("en")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => changeLocale("np")}>
                Nepali
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

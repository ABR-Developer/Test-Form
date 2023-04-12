import logo from "./logo.svg";
import "./App.css";
import { Alert, Button, Form, Card } from "react-bootstrap";
import pic from "./index.jpg";
import timeTable from "./time-table.png";
import location from "./location.png";
import ellipse from "./ellipse.png";

function App() {
  return (
    <div className="container p-5">
      <div className="p-5">
        <div className="payment-form shadow bg-white rounded p-0">
          <div
            className="d-flex rounded-top bg-dark text-light justify-content-around align-items-top px-5 py-3 mb-5"
            style={{ fontSize: "26px" }}
          >
            <div style={{ fontWeight: "700" }}>Choose the form of payment</div>
            <a
              href="/"
              style={{ color: "white", textDecoration: "none" }}
              variant="dark"
            >
              <i className="bi bi-x"></i>
            </a>
          </div>
          <div className="mx-3 mb-3">
            <div className="card p-4">
              <div className="row">
                <div className="col-2 justify-content-end">
                  <p
                    style={{
                      width: "70px",
                      height: "70px",
                      fontSize: "26px",
                      fontWeight: "bold",
                      borderRadius: "50%",
                      backgroundColor: "#EDF2F7",
                      textTransform: "uppercase",
                      paddingTop: "16px",
                      paddingLeft: "24px",
                    }}
                  >
                    J
                  </p>
                </div>
                <div className="col-8">
                  <h4
                    className="card-title"
                    style={{ fontWeight: "bold", fontSize: "26px" }}
                  >
                    John
                  </h4>
                  <h4
                    className="card-subtitle text-muted"
                    style={{ fontSize: "16px" }}
                  >
                    (88) 99602-2404
                  </h4>
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-light py-3 px-4"
                    style={{ fontSize: "16px" }}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-3 mb-3" style={{ fontWeight: "600", fontSize: "22px" }}>
            Selected service
          </div>
          <Card className="mx-3 mb-3 d-flex flex-row">
            <div className="col-lg-3 text-center p-4">
              <Card.Img variant="top" src={pic} style={{ width: "120px" }} />
            </div>
            <Card.Body className="col-lg-9 row">
              <div className="col-lg-8 col-sm-12">
                <Card.Title style={{ fontWeight: "bold", fontSize: "30px" }}>
                  Japanese lessons
                </Card.Title>
                <Card.Text
                  className="d-flex flex-row align-items-center mb-2 text-muted"
                  style={{ fontSize: "20px" }}
                >
                  <Card.Img src={timeTable} style={{ width: "20px" }} />
                  <span className="mx-2">Nov 07 2022 - 11:00</span>
                </Card.Text>
                <Card.Text
                  className="d-flex flex-row align-items-center mb-2 text-muted"
                  style={{ fontSize: "20px" }}
                >
                  <Card.Img src={location} style={{ width: "20px" }} />
                  <Card.Img
                    src={ellipse}
                    style={{
                      position: "relative",
                      left: -12,
                      bottom: 1,
                      width: "5px",
                    }}
                  />
                  <span>Cient Place</span>
                </Card.Text>
              </div>
              <div className="col-lg-4 col-sm-12">
                <Card.Text style={{ fontWeight: "bold", fontSize: "30px" }}>
                  Rp 350.000
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Form>
            <Form.Group className="mx-3 mb-3">
              <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label style={{ fontWeight: "600", fontSize: "22px" }}>
                  Enter your location
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ padding: "16px", fontSize: "16px" }}
                  placeholder="Enter address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontWeight: "600", fontSize: "22px" }}>
                  Note (optional)
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ padding: "16px", fontSize: "16px" }}
                  placeholder="Enter text here"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 overflow-hidden"
                controlId="formBasicPayment"
              >
                <Form.Label style={{ fontWeight: "700", fontSize: "36px" }}>
                  Choose a way to pay
                </Form.Label>
                <div className="row g-3">
                  <div className="col-lg-4 col-sm-6">
                    <Button
                      className="py-3"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        border: "2px solid #262626",
                        borderRadius: "12px",
                        width: "100%",
                      }}
                      variant="light"
                      id="payment"
                    >
                      Cash
                    </Button>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <Button
                      className="py-3"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        borderRadius: "12px",
                        backgroundColor: "#EDF2F7",
                        width: "100%",
                      }}
                      variant="light"
                      id="payment"
                    >
                      Credit card
                    </Button>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <Button
                      className="py-3"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        borderRadius: "12px",
                        backgroundColor: "#EDF2F7",
                        width: "100%",
                      }}
                      variant="light"
                      id="payment"
                    >
                      eWallet/ Virtual bank
                    </Button>
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="my-5 " controlId="formBasicCheckbox">
                <div className="d-flex flex-row">
                  <Form.Check
                    type="checkbox"
                    style={{ fontSize: "18px", marginRight: "16px" ,color: "#616161", mixBlendMode: "normal"}}
                  />
                  <Form.Text
                    className="text-muted"
                    style={{ fontSize: "16px" }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    sed <a href="/">do eiusmod</a>
                  </Form.Text>
                </div>
              </Form.Group>
            </Form.Group>
            <hr className="divider" />
            <Form.Group
              className="px-5 py-3 d-flex flex-row justify-content-between"
              controlId="formBasicButton"
            >
              <Button
                className="py-3 px-5"
                variant="white"
                type="submit"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#262626"
                }}
              >
                Previous
              </Button>
              <Button
                className="py-3 px-5"
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#1E21FF",
                  color: "white",
                  // width:"240px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Next
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Button, Form, Card } from "react-bootstrap";
import pic from "./index.jpg";
import timeTable from "./time-table.png";
import location from "./location.png";
import ellipse from "./ellipse.png";
import { AlignCenter } from "react-bootstrap-icons";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-8 col-sm-12 m-auto">
          <div className="">
            <div className="payment-form shadow bg-white rounded p-0">
              <div
                className="d-flex rounded-top bg-dark text-light justify-content-between align-items-top px-5 py-3 mb-5"
                style={{ fontSize: "26px" }}
              >
                <p
                  style={{
                    margin: "0px",
                    
                    fontWeight: "700",
                  }}
                >
                  Choose the form of payment
                </p>
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none" }}
                  variant="dark"
                >
                  <i className="bi bi-x"></i>
                </a>
              </div>
              <div className="mx-3 mb-3">
                <div className="card card-profile " style={{ background: "#F7FAFC" }}>
                  <div className="row">
                    <div className="col-2 p-0" >
                      <div
                        className="profile-box"
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          backgroundColor: "#EDF2F7",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight:"10px"
                        }}
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "26px",
                            fontWeight: "bold",

                            textTransform: "uppercase",
                          }}
                        >
                          J
                        </p>
                      </div>
                    </div>
                    <div className="col-6 flex align-items-center">
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
                    <div className="col-4 d-flex justify-content-end">
                      <button
                        className="btn btn-light py-3 px-4"
                        style={{ fontSize: "16px", background: "#EDF2F7", fontWeight:"bold" }}
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mx-3 mb-3"
                style={{ fontWeight: "600", fontSize: "22px" }}
              >
                Selected service
              </div>
              <Card className="mx-3 mb-3 d-flex flex-row">
                <div className="col-lg-3 text-center p-4">
                  <Card.Img
                    variant="top"
                    src={pic}
                    style={{ width: "100%", borderRadius: "12px" }}
                  />
                </div>
                <Card.Body className="col-lg-9 row">
                  <div className="col-lg-8 col-sm-12">
                    <Card.Title
                      style={{ fontWeight: "bold", fontSize: "22px" }}
                    >
                      Japanese lessons
                    </Card.Title>
                    <Card.Text
                      className="d-flex flex-row align-items-center mb-2 text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      <Card.Img src={timeTable} style={{ width: "20px" }} />
                      <span className="mx-2">Nov 07 2022 - 11:00</span>
                    </Card.Text>
                    <Card.Text
                      className="d-flex flex-row align-items-center mb-2 text-muted"
                      style={{ fontSize: "14px" }}
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
                    <Card.Text style={{ fontWeight: "bold", fontSize: "22px" }}>
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
                    <div className="row d-flex align-items-center px-2 ">
                      <div className="col-lg-4 col-sm-6 p-0">
                        <div className=" cash-btn p-1">
                          <Button
                            className="py-3 pay-box-active"
                        
                            variant="light"
                            id="payment"
                          >
                            Cash
                          </Button>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 p-1">
                        <div className=" credit-box">
                          <Button
                            className="py-3 pay-box"
                            variant="light"
                            id="payment"
                          >
                            Credit card
                          </Button>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 p-1">
                        <div className=" wallet-box">
                          <Button
                            className="py-3 pay-box"
                            variant="light"
                            id="payment"
                          >
                            eWallet/Virtual bank
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group className="my-5 " controlId="formBasicCheckbox">
                    <div className="d-flex flex-row">
                      <Form.Check
                        type="checkbox"
                        style={{
                          fontSize: "18px",
                          marginRight: "16px",
                          color: "#616161",
                          mixBlendMode: "normal",
                        }}
                      />
                      <Form.Text
                        className="text-muted"
                        style={{ fontSize: "16px" , margin:"0px"}}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. sed <a href="#">do eiusmod</a>
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
                      color: "#262626",
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
      </div>
    </div>
  );
}

export default App;

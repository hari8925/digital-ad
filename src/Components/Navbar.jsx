import React from "react";
import { Link } from "react-router-dom";
import Main from "./Main";

const Navbar = () => {
  return (
    <>
      <div
        className=" fixed-top bg-white align-items-center"
        style={{ minHeight: "56px", zIndex: "5" }}
      >
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <img
              src="https://www.adroll.com/assets/svg/logo-adroll.svg"
              alt="logo"
              style={{ width: "80px", height: "15px", objectFit: "cover" }}
            />
            <button
              class="btn logo d-lg-none me-4 text-white button border-0"
              type="submit"
            >
              GET STARTED
            </button>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* navigation dropdowna */}

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown  nav-item1 d-flex align-items-center mx-3">
                  <a class="nav-link icons " aria-current="page" href="#">
                    Why AdRoll?
                  </a>
                  <i class="fas fa-chevron-down" id="icons"></i>
                  {/* dropdown-item width */}
                  <ul
                    // style={{ width: "1000px" }}
                    class="dropdown-menu bg-white border-0  position-absolute  mt-6 "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" mt-3">
                      <a class="dropdown-item text-start fw-bold" href="#">
                        Why AdRoll
                      </a>
                    </li>
                    <li className="mt-3">
                      <a class="dropdown-item text-start text-muted" href="#">
                        Managed Services
                      </a>
                    </li>

                    <li className=" mt-3">
                      <a class="dropdown-item text-start text-muted " href="#">
                        Case Studies
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  style={{ position: "static" }}
                  class="nav-item dropdown nav-item1 d-flex align-items-center mx-2"
                >
                  <a class="nav-link icons " aria-current="page" href="#">
                    Marketing Platform
                  </a>
                  <i class="fas fa-chevron-down" id="icons"></i>
                  {/* working
                  
                  .nav > li.dropdown.open { position: static; }  
.nav > li.dropdown.open .dropdown-menu { display:table; width: 100%; text-align: center; left:0; right:0; }  
.dropdown-menu>li { display: table-cell; } 
                  */}
                  <div
                    style={{
                      width: "100%",

                      left: "0",
                      right: "0",
                      marginTop: "22rem",
                    }}
                    class="dropdown-menu bg-white border-0 mt-6  "
                    aria-labelledby="navbarDropdown"
                  >
                    <div
                      className="row bg-white justify-content-center mx-3 my-5  mt-6  "
                      id="drops-2"
                    >
                      <div className="col-lg-2 mx-3">
                        <b>Marketing Platform</b>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">
                            Audience & Segmentation
                          </li>
                          <li className=" mt-3 purple">Marketing Automation</li>
                          <li className=" mt-3 purple">Cutomer Privacy</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 mx-3 ">
                        <strong>Campaigns</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Retargeting Ads</li>
                          <li className=" mt-3 purple">Brand Ads</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 mx-3">
                        <strong>Marketing Channels</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Display Advertising</li>
                          <li className=" mt-3 purple">video Advertising</li>
                          <li className=" mt-3 purple">Native Advertising</li>
                          <li className=" mt-3 purple">Email Advertising</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 mx-3">
                        <strong>Connected Channels</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Facebook Advertising</li>
                          <li className=" mt-3 purple">
                            Instagram Advertising
                          </li>
                          <li className=" mt-3 purple">TikTOk Advertising</li>
                          <li className=" mt-3 purple">Google Advertising</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 mx-3">
                        <strong>Analytics</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">
                            Cross-channel Performance
                          </li>
                          <li className=" mt-3 purple">
                            Cross-channel Attribution
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown nav-item1 d-flex align-items-center mx-2">
                  <a class="nav-link icons " aria-current="page" href="#">
                    For Ecommerce
                  </a>
                  <i class="fas fa-chevron-down" id="icons"></i>
                  <ul
                    class="dropdown-menu bg-white border-0  position-absolute  mt-6 drop "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" mt-3">
                      <a class="dropdown-item text-start fw-bold" href="#">
                        <b>AdRoll for ecommerce</b>
                      </a>
                    </li>
                    <li className="mt-3">
                      <a class="dropdown-item text-start text-muted" href="#">
                        Shopify
                      </a>
                    </li>

                    <li className=" mt-3">
                      <a class="dropdown-item text-start text-muted " href="#">
                        Shopify Plus
                      </a>
                    </li>
                    <li className=" mt-3">
                      <a class="dropdown-item text-start text-muted " href="#">
                        WooCommerce
                      </a>
                    </li>
                    <li className=" mt-3">
                      <a class="dropdown-item text-start text-muted " href="#">
                        Wix
                      </a>
                    </li>
                    <li className=" mt-3">
                      <a class="dropdown-item text-start text-muted " href="#">
                        BigCommerce
                      </a>
                    </li>
                    <li className=" mt-3">
                      <a class="dropdown-item text-start text-muted " href="#">
                        Magento
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown nav-item1 d-flex align-items-center mx-2">
                  <a class="nav-link icons " aria-current="page" href="#">
                    Pricing
                  </a>
                  {/* <i class="fas fa-chevron-down" id="icons"></i> */}
                </li>
                <li
                  style={{ position: "static" }}
                  class="nav-item dropdown nav-item1 d-flex align-items-center mx-2"
                >
                  <a class="nav-link icons " aria-current="page" href="#">
                    Resources
                  </a>
                  <i class="fas fa-chevron-down" id="icons"></i>
                  {/* drop-items */}
                  <div
                    style={{
                      width: "100%",

                      left: "0",
                      right: "0",
                      marginTop: "27rem",
                    }}
                    class="dropdown-menu bg-white border-0 mt-6  "
                    aria-labelledby="navbarDropdown"
                  >
                    {/* <div
                      className="row bg-white justify-content-center mx-3 my-5  mt-6  "
                      id="drops-2"
                    >
                      <div className="col-lg-2 mx-3">
                        <b>Marketing Platform</b>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">
                            Audience & Segmentation
                          </li>
                          <li className=" mt-3 purple">Marketing Automation</li>
                          <li className=" mt-3 purple">Cutomer Privacy</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 mx-3 ">
                        <strong>Campaigns</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Retargeting Ads</li>
                          <li className=" mt-3 purple">Brand Ads</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 mx-3">
                        <strong>Marketing Channels</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Display Advertising</li>
                          <li className=" mt-3 purple">video Advertising</li>
                          <li className=" mt-3 purple">Native Advertising</li>
                          <li className=" mt-3 purple">Email Advertising</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 mx-3">
                        <strong>Connected Channels</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Facebook Advertising</li>
                          <li className=" mt-3 purple">
                            Instagram Advertising
                          </li>
                          <li className=" mt-3 purple">TikTOk Advertising</li>
                          <li className=" mt-3 purple">Google Advertising</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 mx-3">
                        <strong>Analytics</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">
                            Cross-channel Performance
                          </li>
                          <li className=" mt-3 purple">
                            Cross-channel Attribution
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    {/* resource */}
                    <div className="row justify-content-center mx-3 mt-5">
                      <div className="col-lg-2">
                        <strong>Marketing Resources</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Resources Library</li>
                          <li className=" mt-3 purple">Addroll blog</li>
                          <li className=" mt-3 purple">
                            Holiday Marketing Resources{" "}
                          </li>
                          <li className=" mt-3 purple">What is retargeting?</li>
                          <li className=" mt-3 purple">Marketing Gloserry </li>
                          <li className=" mt-3 purple">
                            State of Digital Marketing Resources{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-2 ">
                        <strong>Free Tools</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">
                            Return on Ad spend Calculator
                          </li>
                          <li className=" mt-3 purple">
                            AdRoll UTM Link Builder
                          </li>
                          <li className=" mt-3 purple">
                            Discound Profit Margin Calculator
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-2 ">
                        <strong>Community</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Growth Gorrila </li>
                          <li className=" mt-3 purple">Small Business</li>
                          <li className=" mt-3 purple">Events</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 ">
                        <strong>Customer Supports</strong>
                        <ul className=" list-unstyled">
                          <li className=" mt-3 purple">Getting Started </li>
                          <li className=" mt-3 purple">Help center </li>
                          <li className=" mt-3 purple">Research Panel</li>
                        </ul>
                      </div>
                      <div className="col-lg-4 d-flex">
                        <div
                          className="w-100 py-3 px-2 box"
                          style={{ height: "100%", background: "#303273" }}
                        >
                          <div
                            className="mx-2 rounded-3 h-100 flex-column d-flex justify-content-center align-items-center"
                            style={{ background: "#FFE8E0" }}
                          >
                            <img
                              className="m-3 rounded-3 border"
                              width="90%"
                              src="https://www.adroll.com/assets/img/promo/holiday-marketing-hero.png?auto=webp&fm=png&width=393"
                              alt=""
                            />
                            <h6 className="text-center">
                              Power up your holiday marketing
                            </h6>
                            <p className="text-center px-3">
                              {" "}
                              It might seem early, but the race to holiday
                              revenue is on! 🏃We’re here to guide you through
                              your mission to generate brand awareness, maximize
                              budget, and create campaigns your target audience
                              can’t ignore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row p-0">
                        <div className="col-lg-12 rbgNew"> </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div
                className=" w-100 row dropdown-menu bg-white"
                aria-labelledby="navbarDropdown"
              >
                <div className=" col-lg-2 mx-3">
                  <strong>Marketing Platform</strong>
                  <a href="">Audience & Segmentation</a>
                  <a href="">Marketing Automation</a>
                  <a href="">Cutomer Privacy</a>
                </div>
                <div className=" col-lg-2 mx-3">
                  <strong>Campaigns</strong>
                  <a href="">Retargeting Ads</a>
                  <a href="">Brand Ads</a>
                </div>
                <div className=" col-lg-2"></div>
                <div className=" col-lg-2"></div>
                <div className=" col-lg-2"></div>
              </div>
              {/* buttons */}
              <div class="d-flex  align-items-center mx-2">
                <a class="me-4  button3  d-lg-block">Login</a>
                <button class="btn text-white button border-0" type="submit">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
          {/* offcanva */}

          <div
            class="offcanvas offcanvas-end bg-dark"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close text-reset bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body d-lg-none">
              <img
                className=" w-50 "
                style={{ objectFit: "cover" }}
                src="https://www.adroll.com/assets/svg/logo-adroll-white.svg"
                alt=""
              />
              <div className=" p-2">
                <h5 className=" text-white mt-4 ms-2">Why AdRoll?</h5>
                <p className=" text-white mt-2 ms-4 fs-6">Managed Service</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">Case Studies</p>
              </div>
              <div className=" p-2">
                <h5 className=" text-white mt-4 ms-2">AdRoll for ecommerce</h5>
                <p className=" text-white mt-2 ms-4 fs-6">Shopify</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">Shopify Plus</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">WooCommerce</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">Wix</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">BigCommerce</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">Magento</p>
              </div>
              <div className=" p-2">
                <h5 className=" text-white mt-4 ms-2">Marketing platform</h5>
                <p className=" text-white mt-2 ms-4 fs-6">Platform OverView</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">Retargeting Ads</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  Brand Awareness Ads
                </p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  Marketing Channels
                </p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  Connected Channels
                </p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  Audience & Segmentation
                </p>
                <p className=" text-white mt-2 ms-4 fs-6 ">Email Marketing</p>
              </div>
              <div className=" p-2">
                <h5 className=" text-white mt-4 ms-2">Pricing</h5>
              </div>
              <div className=" p-2">
                <h5 className=" text-white mt-4 ms-2">Resources</h5>
                <p className=" text-white mt-2 ms-4 fs-6">AdRoll Blog</p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  Third-party Cookie Trail Guides
                </p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  Marketing Glossary
                </p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  Holiday Marketing Resources
                </p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  State of Digital Marketing Report
                </p>
                <p className=" text-white mt-2 ms-4 fs-6 ">
                  Return On Ad Spend Calculator
                </p>
              </div>
              <div className=" p-2">
                <h5 className=" text-white mt-4 ms-2">Log in</h5>
              </div>
              <div className=" p-2">
                <button className=" btn px-1 w-100 rounded-2 btn-purp">
                  GET REGISTER
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Main />
      {/* main */}
    </>
  );
};

export default Navbar;

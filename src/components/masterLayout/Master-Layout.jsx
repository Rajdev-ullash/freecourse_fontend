/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineLogout,
  AiOutlineMenuUnfold,
  AiOutlineUser,
} from "react-icons/ai";
import { BsHourglass, BsListNested } from "react-icons/bs";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar2.png";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import sidebarStyle from "../../assets/css/sidebar.module.css";
import dropdownStyle from "../../assets/css/dropdownmenu.module.css";
// import { getUserDetails, removeSession } from "../../helper/SessionHelper";

const MasterLayout = (props) => {
  let contentRef,
    sideNavRef = useRef();

  // const onLogout = () => {
  //   removeSession();
  // };

  const MenuBarClickHandler = () => {
    let sideNav = sideNavRef;
    let content = contentRef;
    if (sideNav.classList.contains(`${sidebarStyle.side_nav_open}`)) {
      sideNav.classList.add(`${sidebarStyle.side_nav_close}`);
      sideNav.classList.remove(`${sidebarStyle.side_nav_open}`);
      content.classList.add(`${sidebarStyle.content_expand}`);
      content.classList.remove(`${sidebarStyle.content}`);
    } else {
      sideNav.classList.remove(`${sidebarStyle.side_nav_close}`);
      sideNav.classList.add(`${sidebarStyle.side_nav_open}`);
      content.classList.remove(`${sidebarStyle.content_expand}`);
      content.classList.add(`${sidebarStyle.content}`);
    }
  };

  return (
    <Fragment>
      <Navbar
        className="fixed-top px-0 shadow-sm"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container fluid={true}>
          <Navbar.Brand>
            <a
              className={`m-0 h5${sidebarStyle.icon_nav}`}
              onClick={MenuBarClickHandler}
            >
              <AiOutlineMenuUnfold />
            </a>
            <img
              className={`mx-2${sidebarStyle.nav_logo}`}
              src=""
              alt="FreeCourse Admin"
            />
          </Navbar.Brand>

          <div className="float-right h-auto d-flex">
            <div className={`${dropdownStyle.user_dropdown}`}>
              <img
                className={`mx-2 ${sidebarStyle.icon_nav_img} ${sidebarStyle.icon_nav}`}
                // src={getUserDetails()["photo"]}
                src={avatar}
                alt=""
              />

              <div className={`${dropdownStyle.user_dropdown_content}`}>
                <div className="mt-4 text-center">
                  <img
                    className={`mx-2 ${sidebarStyle.icon_nav_img}`}
                    // src={getUserDetails()["photo"]}
                    src={avatar}
                    alt=""
                  />
                  <h6>
                    {/* {getUserDetails()["firstName"]} */}
                    Raj
                  </h6>
                  <hr
                    className={`p-0 ${dropdownStyle.user_dropdown_divider}`}
                  />
                </div>
                <NavLink
                  to="/Profile"
                  className={`${sidebarStyle.side_bar_item}`}
                >
                  <AiOutlineUser
                    className={`${sidebarStyle.side_bar_item_icon}`}
                  />
                  <span className={`${sidebarStyle.side_bar_item_caption}`}>
                    Profile
                  </span>
                </NavLink>
                <a className={`${sidebarStyle.side_bar_item}`}>
                  <AiOutlineLogout
                    className={`${sidebarStyle.side_bar_item_icon}`}
                  />
                  <span className={`${sidebarStyle.side_bar_item_caption}`}>
                    Logout
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>

      <div
        ref={(div) => {
          sideNavRef = div;
        }}
        className={`${sidebarStyle.side_nav_open}`}
      >
        <NavLink
          className={(navData) =>
            navData.isActive
              ? ` mt-2 ${sidebarStyle.side_bar_item_active} ${sidebarStyle.side_bar_item}`
              : ` mt-2 ${sidebarStyle.side_bar_item}`
          }
          to="/admin/home"
          end
        >
          <RiDashboardLine className={`${sidebarStyle.side_bar_item_icon}`} />
          <span className={`${sidebarStyle.side_bar_item_caption}`}>
            Dashboard
          </span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? ` mt-2 ${sidebarStyle.side_bar_item_active} ${sidebarStyle.side_bar_item}`
              : ` mt-2 ${sidebarStyle.side_bar_item}`
          }
          to="/admin/Create"
        >
          <AiOutlineEdit className={`${sidebarStyle.side_bar_item_icon}`} />
          <span className={`${sidebarStyle.side_bar_item_caption}`}>
            Create Course
          </span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? ` mt-2 ${sidebarStyle.side_bar_item_active} ${sidebarStyle.side_bar_item}`
              : ` mt-2 ${sidebarStyle.side_bar_item}`
          }
          to="/All"
        >
          <BsListNested className={`${sidebarStyle.side_bar_item_icon}`} />
          <span className={`${sidebarStyle.side_bar_item_caption}`}>
            Show Course
          </span>
        </NavLink>

        {/* <NavLink
          className={(navData) =>
            navData.isActive
              ? "side_bar_item_active side_bar_item mt-2"
              : "side_bar_item mt-2"
          }
          to="/Progress"
        >
          <BsHourglass className="side_bar_item_icon" />
          <span className="side_bar_item_caption">In Progress</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side_bar_item_active side_bar_item mt-2"
              : "side_bar_item mt-2"
          }
          to="/Completed"
        >
          <AiOutlineCheckCircle className="side_bar_item_icon" />
          <span className="side_bar_item_caption">Completed</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side_bar_item_active side_bar_item mt-2"
              : "side_bar_item mt-2"
          }
          to="/Canceled"
        >
          <MdOutlineCancelPresentation className="side_bar_item_icon" />
          <span className="side_bar_item_caption">Canceled</span>
        </NavLink> */}
      </div>

      <div
        ref={(div) => (contentRef = div)}
        className={`${sidebarStyle.content}`}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default MasterLayout;

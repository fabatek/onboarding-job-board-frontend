import React, { ReactElement } from "react";

type FooterItem = {
  id: number;
  title: string;
};

interface ListFooterItem {
  list: FooterItem[];
}

const aboutUsList: FooterItem[] = [
  { id: 1, title: "Home" },
  { id: 2, title: "About Us" },
  { id: 3, title: "Contact Us" },
  { id: 4, title: "All Job" },
  { id: 5, title: "About us" },
];

const termAndConditionList: FooterItem[] = [
  { id: 1, title: "Privacy Policy" },
  { id: 2, title: "Operating Regulation" },
  { id: 3, title: "Complaint Handling" },
  { id: 4, title: "Term & Condition" },
  { id: 5, title: "Press" },
];

const Footer: React.FC = () => {
  const RenderFooterList = ({ list }: ListFooterItem): ReactElement => {
    return (
      <>
        {list.map((item) => {
          return (
            <li key={item.id} className="nav-item text-secondary fw-normal">
              {item.title}
            </li>
          );
        })}
      </>
    );
  };

  return (
    <footer className="bg-dark">
      <div className="row px-5 d-flex justify-content-center py-5">
        <div className="col-5">
          <div className="row">
            <div className="col-6">
              <ul className="navbar-nav fs-15">
                <li className="nav-item text-light disable fw-bold mb-1">
                  About Us
                </li>
                <RenderFooterList list={aboutUsList} />
              </ul>
            </div>
            <div className="col-6">
              <ul className="navbar-nav fs-15">
                <li className="nav-item text-light disable fw-bold mb-1">
                  Terms & Conditions
                </li>
                <RenderFooterList list={termAndConditionList} />
              </ul>
            </div>
          </div>
          <div className="py-2">
            <p className="text-light disable fw-bold mb-1">
              Want to post a job? Contact us at:
            </p>
            <p className="text-secondary fw-normal">
              Ho Chi Minh: (+84) 977 460 519 - Ha Noi: (+84) 983 131 351 -
              Email: love@itviec.com
            </p>
          </div>
        </div>
        <div className="col-5">
          <div className="">
            <ul className="navbar-nav fs-15">
              <li className="nav-item text-secondary fw-normal">
                Copyright © IT VIEC JSC
              </li>
              <li className="nav-item text-secondary fw-normal">
                Tax code: 0312192258
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

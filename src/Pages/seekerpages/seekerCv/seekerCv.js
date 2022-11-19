import Styles from "./seekerCv.module.css";
import logo from "../../../Assets/Images/image 1.png";
import idcard from "../../../Assets/Images/images 1.png";
import profomg from "../../../Assets/Images/Rectangle 1246.png";
const SeekerCv = () => {
  return (
    <div
      className={`d-flex justify-content-center py-5 ${Styles.SeekerCvmain}`}
    >
      <div className={`${Styles.SeekerCvchaild}`}>
        <div className="d-flex justify-content-between p-3 ">
          <img style={{ width: "235px", height: "93px" }} src={logo} />{" "}
          <div className="d-flex">
            <div className="  ">
              <p className="ogsfonts16 me-2 text-end ">Email:</p>{" "}
              <p className="ogsfonts16 me-2 text-end ">Whatsapp/Contact No:</p>
            </div>
            <div className=" ">
              {" "}
              <p className="ogsfonts16 ">alue6988@gmail.com</p>
              <p className="ogsfonts16 ">(+92) 1824 458 255</p>
            </div>
          </div>
        </div>
        <div className={` p-4 ${Styles.apphead}`}>
          <h1 className="ogsfonts20 text-center">APPLICATION FORM</h1>
        </div>
        <div className="d-flex justify-content-between p-3">
          <div className="d-flex ">
            <img className="me-2" style={{ width: "170px" }} src={profomg} />
            <div>
              <div>
                <p className="m-0 ogsfonts16">FULL NAME</p>
                <p className="m-0 fontcolorred ogsfonts16">MUNIERA AHMED</p>
              </div>
              <div>
                <p className="m-0 ogsfonts16">OCCUPATION</p>
                <p className="m-0 fontcolorred ogsfonts16">DRIVER</p>
              </div>
              <div>
                <p className="m-0 ogsfonts16">TOTAL WORK EXPERIENCE</p>
                <p className="m-0 fontcolorred ogsfonts16 ">12 YEARS</p>
              </div>
              <div>
                <p className="m-0 ogsfonts16"> EXPECTED SALARY</p>
                <p className="m-0 fontcolorred ogsfonts16"> 2000 SR</p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              <p className="m-0 ogsfonts16">الاسم الكامل</p>
              <p className="m-0 fontcolorred ogsfonts16">منيرة أحمد</p>
            </div>
            <div>
              <p className="m-0 ogsfonts16">إشغال</p>
              <p className="m-0 fontcolorred ogsfonts16">سائق</p>
            </div>
            <div>
              <p className="m-0 ogsfonts16">خبرة عمل كاملة</p>
              <p className="m-0 fontcolorred ogsfonts16 ">12 سنة</p>
            </div>
            <div>
              <p className="m-0 ogsfonts16"> الراتب المتوقع</p>
              <p className="m-0 fontcolorred ogsfonts16"> 2000 ريال</p>
            </div>
          </div>
        </div>
        <div className={` px-3 py-2  `}>
          <div
            className={`d-flex justify-content-between px-3 py-2  ${Styles.appdetail}`}
          >
            {" "}
            <p className="m-0 ms-5 ogsfonts16">APPLICATION DETAILS</p>{" "}
            <p className="m-0 me-5 ogsfonts16">PASSPORT DETAILS</p>
          </div>
        </div>
        <div className={` px-3 py-2 row`}>
          <div className="col-6">
            <div className={`my-3 d-flex justify-content-between`}>
              <p className="m-0 ogsfonts16">NATIONALITY</p>{" "}
              <p className="m-0 fontcolorred  ogsfonts16">MUSLIM</p>{" "}
              <p className="m-0 ogsfonts16"> جنسية</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">RELIGION</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">PAKISTAN</p>{" "}
              <p className="m-0 ogsfonts16"> دين</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">DATE OF BIRTH</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">19-20-2000</p>{" "}
              <p className="m-0 ogsfonts16"> تاريخ الولادة</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">BIRTH PLACE</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">SAHIWAL</p>{" "}
              <p className="m-0 ogsfonts16"> مكان الولادة</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">AGE</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">22</p>{" "}
              <p className="m-0 ogsfonts16"> سن</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">ADDRESS</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">SAHIWAL</p>{" "}
              <p className="m-0 ogsfonts16"> تبوك</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">MARTIAL STATUS</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">MARRIED</p>{" "}
              <p className="m-0 ogsfonts16"> الحالة الزوجية</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">WEIGHT</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">55KG</p>{" "}
              <p className="m-0 ogsfonts16"> وزن</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">HEIGHT</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">5.7</p>{" "}
              <p className="m-0 ogsfonts16"> الراتب المتوقع</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">SKIN COLOR</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">FAIR</p>{" "}
              <p className="m-0 ogsfonts16"> لون البشرة</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">NATIONALITY</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">PAKISTAN</p>{" "}
              <p className="m-0 ogsfonts16"> جنسية</p>
            </div>
            <div
              className={`d-flex justify-content-between px-3 py-2  ${Styles.appdetail}`}
            >
              {" "}
              <p className="m-0 ms-5 ogsfonts16">LANGUAGE</p>{" "}
              <p className="m-0 me-5 ogsfonts16">لغة</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">LANGUAGE</p>{" "}
              <p className="m-0  ogsfonts16">WEAK</p>{" "}
              <p className="m-0 ogsfonts16"> AVERAGE</p>
              <p className="m-0 ogsfonts16"> GOOD</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">ARABIC</p>{" "}
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">ENGLISH</p>{" "}
            </div>

            <div
              className={`d-flex justify-content-between px-3 py-2  ${Styles.appdetail}`}
            >
              {" "}
              <p className="m-0 ms-5 ogsfonts16">EXPERIENCE OVERSEAS</p>{" "}
              <p className="m-0 me-5 ogsfonts16">تجربة في الخارج</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">COUNTRY</p>{" "}
              <p className="m-0  ogsfonts16">PERIOD</p>{" "}
              <p className="m-0 ogsfonts16"> OCCUPATION</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16 fontcolorred">SAUDI ARABIA</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">1-4 YEARS</p>{" "}
              <p className="m-0 ogsfonts16 fontcolorred"> DRIVER</p>
            </div>
            <div
              className={`d-flex justify-content-between px-3 py-2  ${Styles.appdetail}`}
            >
              {" "}
              <p className="m-0 ms-5 ogsfonts16">APPLICATION DETAILS</p>{" "}
              <p className="m-0 me-5 ogsfonts16">PASSPORT DETAILS</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16">COUNTRY</p>{" "}
              <p className="m-0  ogsfonts16">PERIOD</p>{" "}
              <p className="m-0 ogsfonts16"> OCCUPATION</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16 fontcolorred">SAUDI ARABIA</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">1-4 YEARS</p>{" "}
              <p className="m-0 ogsfonts16 fontcolorred"> DRIVER</p>
            </div>
          </div>
          <div className="col-6">
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16 ">PASSPORT NO</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">HSK5525</p>{" "}
              <p className="m-0 ogsfonts16 "> رقم جواز السفر</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16 ">DATE OF ISSUE</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">05-02-2000</p>{" "}
              <p className="m-0 ogsfonts16 "> تاريخ المسألة</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16 ">DATE OF EXPIRY</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">05-02-2022</p>{" "}
              <p className="m-0 ogsfonts16 "> تاريخ الانتهاء</p>
            </div>
            <div className={`d-flex justify-content-between my-3`}>
              <p className="m-0 ogsfonts16 ">ERC/ECNR</p>{" "}
              <p className="m-0 fontcolorred ogsfonts16">ECNR</p>{" "}
              <p className="m-0 ogsfonts16 "> الراتب المتوقع</p>
            </div>
            <img src={idcard} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeekerCv;

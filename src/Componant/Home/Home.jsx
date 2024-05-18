import React, { useState } from "react";
import upload from "../../assets/upload.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";

export default function Home() {
  const [borderedImg, setBorderedImg] = useState(null);

  const handleImageClick = (img) => {
    setBorderedImg(borderedImg === img ? null : img);
  };

  return (
    <>
      <div className="main_div">
        <div>
          <h5>مجموعة ايطارات تناسب ذوقك</h5>
        </div>
        <div className="div_slider mt-3">
          <div
            onClick={() => handleImageClick(img1)}
            className={borderedImg === img1 ? "bordered" : ""}
          >
            <div>
              <img src={img1} alt="" />
              <p
                onClick={() => handleImageClick(img1)}
                className={borderedImg === img1 ? "color-of-border" : ""}
              >
                أسود
              </p>
            </div>
          </div>
          <div
            onClick={() => handleImageClick(img2)}
            className={borderedImg === img2 ? "bordered" : ""}
          >
            <div>
              <img src={img2} alt="" />
              <p
                onClick={() => handleImageClick(img2)}
                className={borderedImg === img2 ? "color-of-border" : ""}
              >
                أسود كلاسيك
              </p>
            </div>
          </div>
          <div
            onClick={() => handleImageClick(img3)}
            className={borderedImg === img3 ? "bordered" : ""}
          >
            <div>
              <img src={img3} alt="" />
              <p
                onClick={() => handleImageClick(img3)}
                className={borderedImg === img3 ? "color-of-border" : ""}
              >
                أبيض
              </p>
            </div>
          </div>
          <div
            onClick={() => handleImageClick(img4)}
            className={borderedImg === img4 ? "bordered" : ""}
          >
            <div>
              <img src={img4} alt="" />
              <p
                onClick={() => handleImageClick(img4)}
                className={borderedImg === img4 ? "color-of-border" : ""}
              >
                أبيض كلاسيك
              </p>
            </div>
          </div>
          <div
            onClick={() => handleImageClick(img5)}
            className={borderedImg === img5 ? "bordered" : ""}
          >
            <div className="">
              <img src={img5} alt="" />
              <span className="salemax">الأكثر مبيعا</span>
              <p
                onClick={() => handleImageClick(img5)}
                className={`parsale ${
                  borderedImg === img5 ? "color-of-border" : ""
                }`}
              >
                صورة كاملة
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label className="custum-file-upload" htmlFor="file">
            <div className="icon">
              <img src={upload} alt="Upload_Image" />
            </div>
            <div className="text">
              <span>اختار صور محددة</span>
            </div>
            <input type="file" id="file" />
          </label>
        </div>
        <div className="last_div mb-5">
          <div>
            <p>خدمة طباعه خاصة - 19 ريال</p>
            <input type="checkbox" className="ui-checkbox" />
          </div>
          <div className="">
            <span className="question">
              <i className="fa-solid fa-question"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

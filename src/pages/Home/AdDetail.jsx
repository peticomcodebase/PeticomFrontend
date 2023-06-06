import React from "react";
import '../../assets/css/resultdetail.css';
import { CatPhoto, Picture1, Picture2 } from "../../assets/img";
import { useNavigate } from "react-router-dom";
import { url } from "../../routes/Utility";

const AdDetail = () => {
 
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="flex mt-8 mb-2 cursor-pointer items-center hover:text-orange" onClick={() => navigate(url("home.ad"))}>
        <span class="material-symbols-outlined ">
            arrow_back
        </span>
        <h1 className="my-auto text-xl">Önceki İlanlar</h1>
      </div>
      <div className="resultdetail">
        <div className="grid grid-cols-3 gap-5">
          <div className=" pt-10  col-span-1 mx-auto x">
            <img
              className="border-r-50 mx-auto"
              src="https://i.pravatar.cc/200"
              alt=""
            />
            <h2 className="peticomer-name">*Peticomer Name*</h2>
            <img className="w-60 mx-auto" src="../assets/stars/5.svg" alt="" />
            <div className="flex badges-detail justify-center mt-4">
              <img className="badge" src="../assets/badges/cat.svg" alt="" />
              <img
                className="badge"
                src="../assets/badges/handshake-with-heart.svg"
                alt=""
              />
              <img
                className="badge"
                src="../assets/badges/smiley-face.svg"
                alt=""
              />
            </div>
            <div className="pets">
              <h1>Petleri</h1>
              <div className="flex peticomer-pets-pic gap-4 justify-center">
                <img src={CatPhoto} alt="" />
                <img src={CatPhoto} alt="" />
                <img src={CatPhoto} alt="" />
                <img src={CatPhoto} alt="" />
              </div>
            </div>
          </div>
          <div className=" pt-10 pb-10 pl-24 pr-48 col-span-2 mx-auto">
            <div className="peticomer-bio">
              <h2 className="text-center">*Kendini Tanıtma Kısmı*</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi aliquid perferendis quibusdam enim aliquam, eum,
                consequuntur eius assumenda dolorum incidunt ipsam quaerat
                quidem, vitae dolores esse eligendi quo optio eveniet?
              </p>
            </div>
            <div className="peticomer-home-pic">
              <h2>Fotoğraflar</h2>
              <div className="flex peticomer-home-pics gap-6 pt-4">
                <img src={Picture1} alt="" />
                <img src={Picture2} alt="" />
              </div>
            </div>
            <div className="review">
              <h2>Önceki Değerlendirme</h2>
              <div className="">
                <div className="flex reviewer-name-star gap-14">
                  <h3>Ayşe Naz - Ankara</h3>
                  <img src="../assets/stars/5.svg" alt="" />
                </div>
                <li>Biz çok memnun kaldık.</li>
              </div>
            </div>
            {/* <div className="review-continue">
              <button>Devamını Gör</button>
            </div> */}
            <div className="price text-end">
              <div className="text-center">
                Gecelik
                <br />
                *price*₺
              </div>
            </div>
            <div className="rezervation">
              <button className="items-center">
                Rezervasyon
                <br />
                Yap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetail;

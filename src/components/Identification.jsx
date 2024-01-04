import img1 from "../img/img-4.webp";
import img2 from "../img/img-5.webp";
import img3 from "../img/img-6.webp";
import img4 from "../img/img-7.webp";
import img5 from "../img/img-3.jpg";
import img6 from "../img/img-2.webp";
export default function Identification() {
  return (
    <div className="identification">
      <div className="container">
        <div className="boxes">
          <div className="box">
            <img src={img1} alt="" />
            <div className="details">
              <h1>NOTCH LAPEL SUIT</h1>
              <p>
                Mattis rhoncus urna neque viverra justo nec ultrices dui.
                Lobortis elementum nibh tellus molestie nunc non blandit.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img2} alt="" />
            <div className="details">
              <h1>MORDEN FIT SUIT</h1>
              <p>
                Accumsan lacus vel facilisis volutpat. Mauris commodo quis
                imperdiet massa. Pellentesque diam volutpat commodo sed.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img3} alt="" />
            <div className="details">
              <h1>CLASSIC FIT SUIT</h1>
              <p>
                Convallis a cras semper auctor neque vitae. Eget nullam non nisi
                est sit amet facilisis. Nunc lobortis mattis aliquam faucibu.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img4} alt="" />
            <div className="details">
              <h1>SINGLE VENT SUIT</h1>
              <p>
                Sagittis vitae et leo duis. Malesuada bibendum arcu vitae
                elementum curabitur. Justo eget magna fermentum iaculis eu.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img5} alt="" />
            <div className="details">
              <h1>PEAK LAPEL SUIT</h1>
              <p>
                Aenean vel elit scelerisque mauris pellentesque. Orci a
                scelerisque purus semper eget duis at tellus. Viverra vitae
                congue eu.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img6} alt="" />
            <div className="details">
              <h1>SLIM FIT SUIT</h1>
              <p>
                Molestie at elementum eu facilisis sed odio morbi quis commodo.
                Vel orci porta non pulvinar neque. Vulputate sapien nec
                sagittis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

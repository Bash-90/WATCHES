import { AiOutlineClockCircle, AiFillSetting } from "react-icons/ai";
import { BsBoxes } from "react-icons/bs";
import image from "../img/img-8.webp";

export default function Branded() {
  return (
    <>
      <div className="branded">
        <div className="container">
          <div className="row">
            <div className="text">
              <span>WE BRING TRENDS TO YOUR DOORSTEP</span>
              <h1>BRANDED DESIGNERS</h1>
              <p>
                Pulvinar etiam non quam lacus suspendisse faucibus. Enim
                praesent elementum facilisis leo vel fringilla est ullamcorper
                eget. Odio euismod lacinia at quis. Mattis rhoncus urna neque
                viverra justo nec ultrice.
              </p>
              <div className="column">
                <div className="box">
                  <div className="rotate">
                    <AiOutlineClockCircle />
                  </div>
                  <div className="explain">
                    <h1>UPGRADED DESIGN</h1>
                    <p>
                      Mauris cursus mattis molestie a iaculis at erat
                      pellentesque. Ut sem viverra aliquet eget. Mi ipsum
                      faucibus vitae aliquet nec ullamcorper.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="rotate">
                    <BsBoxes />
                  </div>
                  <div className="explain">
                    <h1>RESONABLE PRICE</h1>
                    <p>
                      Integer malesuada nunc vel risus commodo viverra maecenas.
                      Sed felis eget velit aliquet sagittis id consectetur.
                      Faucibus nisl tinci.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="rotate">
                    <AiFillSetting />
                  </div>
                  <div className="explain">
                    <h1>HIGH QUALITY PRODUCTS</h1>
                    <p>
                      Non blandit massa enim nec dui nunc mattis enim ut.
                      Faucibus a pellentesque sit amet porttitor eget dolor.
                      Faucibus ornare suspen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

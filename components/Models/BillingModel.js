import React from "react";
import classes from "./BillingModel.module.css";
import ModelCard from "../ui/ModelCard";
import Location from "../ui/Location";
import StarRating from "../ui/StarRating";
import { FormatDate } from "@/utils/util";
const BillingModel = () => {
  return (
    <div className={classes.main}>
      <ModelCard width={"100%"} padding={"20px 20px 20px 20px "} height={'50vh'}>
        <div className={classes.Gradientcard}>
          <h1
            style={{
              color: "white",
              fontFamily: "Abril Fatface, serif",
              fontSize: "30px",
            }}
          >
            The Taj
          </h1>
          <div className={classes.address}>
            <ul>
              <li>
                <Location />
              </li>
              <li
                className={classes.addText}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Mumbai, Apollo Bandar, Colaba
              </li>
            </ul>
          </div>
        </div>
        <div>
          <StarRating Fixed={3} />
        </div>
        <div className="flex flex-row w-full items-center">
          <div className="flex flex-row gap-5 text-m m0 grow">
            <div>{FormatDate("2023-11-05")}</div>
            <p>-</p>
            <div>{FormatDate("2023-11-06")}</div>
          </div>
          <div className={classes.room}>
          <button>+</button>
          <span>
            <input
              type="number"
              value={"1"}
              className="w-1.5 text-m bg-transparent focus:cursor-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none m-1 "
            />
            <span className="text-m">Night</span>
          </span>
          <button>-</button>
        </div>
          <div className={classes.room}>
            <button>+</button>
            <span>
              <input
                type="number"
                value={"1"}
                className="w-1.5 text-m bg-transparent focus:cursor-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none mr-1 "
              />
              <span className="text-m">Room</span>
            </span>
            <button>-</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-5 mb-5 ">
        <div className={`col-span-2 ${classes.lineClass}`}></div>
          <div>Room Price for one Night -</div>
          <div className="justify-self-center">3000</div>
          <div>Instant discount -</div>
          <div  className="justify-self-center">1000</div>
          <div>Coupon discount - </div>
          <div  className="justify-self-center">200</div>
        <div className={`col-span-2 ${classes.lineClass}`}></div>
        <div>Total</div>
        <div  className="justify-self-center">2800</div>
        </div>
      </ModelCard>
    </div>
  );
};

export default BillingModel;

/* eslint-disable react/prop-types */
import { PiPhoneCall } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";

export default function Contact({name, number}) {
  return (
    <div>
      <div>
        <div>
          <span>
            <GoPeople />
          </span>
          {name}
        </div>
        <div>
          <span>
            <PiPhoneCall />
          </span>
          {number}
        </div>
      </div>
      <button>
        delete
        <span>
          <AiOutlineDelete />
        </span>
      </button>
    </div>
  );
}

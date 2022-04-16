import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Season from "./Season";
import RefindedHours from "./RefindedHours";
import FavoriteButton from "../UI/FavoriteButton";
import LocationTxt from "../UI/LocationTxt";
import Phone from "../UI/Phone";
import Email from "../UI/Email";
import "./FarmStandData.css";

const FarmStandData = (props) => {
  const [farmStandData, setFarmStandData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api").then((res) => {
      setFarmStandData(res.data);
    });
  }, []);

  function selectedFarmStand(id) {
    console.log("selected donation id", id);
    navigate("/locationId/" + id);
    // setSelectedDonationId(id);
  }

  return (
    <main>
      {farmStandData.map((farmStand) => (
        <div className="farmDataDiv" key={farmStand.id}>
          <img
            width={100}
            height={100}
            src={farmStand.images}
            alt={farmStand.vendor_name}
          />
          <h1 onClick={() => selectedFarmStand(farmStand.id)}>
            {farmStand.community}{" "}
          </h1>
          <hr />
          <address>{farmStand.address}</address>
          <Season season={farmStand.duration} />
          <RefindedHours hours={farmStand.hours} />
          {/* dog ear tag to flip card to show data */}
          {/* <ShortenData data={farmStand.vendor_description} /> */}
          <div className="heartpos">
            <LocationTxt />
            <Phone />
            <Email />
            <FavoriteButton />
          </div>
        </div>
      ))}
    </main>
  );
};

export default FarmStandData;

//   return (
//     <FarmStandCard>
//       <main>
//         {farmStandData.map((farmStand) => (

//           <FarmStand <---change to another component name
//             key={farmStand.id}
//             farmStandSelected={() => selectedFarmStand(farmStand.id)}
//             images={farmStand.images}
//             vendor_name={farmStand.vendor_name}
//             community={farmStand.community}
//             address={farmStand.address}
//           />
//         ))}
//       </main>
//     </FarmStandCard>
//   );
// };

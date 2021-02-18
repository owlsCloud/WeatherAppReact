import React from "react";

const Conditions = (props) => {
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>

          <p>
            It is currently {1.8 * (Math.floor(props.responseObj.main.temp - 273) + 32)} degrees (in F) out with{" "}
            {props.responseObj.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Conditions;

import { useState } from "react";
export default function Calculator() {
  const [units, setUnits] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [inputComplete, setInputComplete] = useState(false);

  const handleUnitChange = (e) => {
    setUnits(e.target.value);
  };

  const handleInputChange = () => {
    if (height && weight) {
      setInputComplete(true);
    } else {
      setInputComplete(false);
    }
  };
  return (
    <article className="calculator">
      <form>
        <h3>Enter your details below</h3>

        <fieldset id="units" className="units">
          <legend className="sr-only">Units</legend>
          <label htmlFor="metric" className="radio-label">
            <input
              className="radio-input"
              type="radio"
              name="units"
              id="metric"
              value="metric"
              checked={units === "metric"}
              onChange={handleUnitChange}
            />
            Metric
          </label>
          <label htmlFor="imperial" className="radio-label">
            <input
              className="radio-input"
              type="radio"
              name="units"
              id="imperial"
              value="imperial"
              checked={units === "imperial"}
              onChange={handleUnitChange}
            />
            Imperial
          </label>
        </fieldset>

        <div className="inputs">
          <div className="input-container">
            <label htmlFor="height">Height</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="height"
                name="height"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                  handleInputChange();
                }}
              />
              <h3 className="input-units">
                {units === "metric" ? "cm" : "in"}
              </h3>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="weight"
                name="weight"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  handleInputChange();
                }}
              />
              <h3 className="input-units">
                {units === "metric" ? "kg" : "lbs"}
              </h3>
            </div>
          </div>
        </div>
      </form>

      <div className="result-container">
        {inputComplete ? (
          <div>
            <p className="result-header">Your BMI is...</p>
          </div>
        ) : (
          <div>
            <h3>Welcome!</h3>
            <p>
              Enter your height and weight and you&apos;ll see your BMI result
              here
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

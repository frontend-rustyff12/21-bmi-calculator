import { useState } from "react";
export default function Calculator() {
  const [units, setUnits] = useState("metric");
  const [inputComplete, setInputComplete] = useState(false);
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
            />
            Imperial
          </label>
        </fieldset>
        <div className="inputs">
          <div className="input-container">
            <label htmlFor="height">Height</label>
            <input type="text" />
            {/* <input type="text" /> */}
          </div>
          <div className="input-container">
            <label htmlFor="height">Weight</label>
            <input type="text" />
            {/* <input type="text" /> */}
          </div>
        </div>
      </form>
      <div className="result-container">
        {inputComplete ? (
          <div>
            <p className="result-header">YourBMI is...</p>
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

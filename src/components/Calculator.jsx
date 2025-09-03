import { useState, useEffect } from "react";

export default function Calculator() {
  const [units, setUnits] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imperialHeight, setImperialHeight] = useState({ ft: "", inches: "" });
  const [imperialWeight, setImperialWeight] = useState({ st: "", lbs: "" });
  const [inputComplete, setInputComplete] = useState(false);
  const [bmi, setBmi] = useState(null);

  useEffect(() => {
    const isMetricComplete = units === "metric" && height && weight;

    const isImperialComplete =
      units === "imperial" &&
      imperialHeight.ft &&
      imperialHeight.inches &&
      imperialWeight.st &&
      imperialWeight.lbs;

    if (isMetricComplete) {
      const heightMeters = parseFloat(height) / 100;
      const weightKg = parseFloat(weight);
      const resultBmi = calculateBMI(heightMeters, weightKg);
      setBmi(resultBmi);
      setInputComplete(true);
    } else if (isImperialComplete) {
      const convertedHeight = ftToCm(imperialHeight);
      const convertedWeight = stonesAndPoundsToKg(imperialWeight);

      const resultBmi = calculateBMI(convertedHeight, convertedWeight);

      setBmi(resultBmi);
      setInputComplete(true);
    } else {
      setInputComplete(false);
    }
  }, [height, weight, imperialHeight, imperialWeight, units]);

  function ftToCm({ ft, inches }) {
    const feetConversion = parseFloat(ft) * 30.48;
    const inchesConversion = parseFloat(inches) * 2.54;
    return (feetConversion + inchesConversion) / 100;
  }

  function stonesAndPoundsToKg({ st, lbs }) {
    const totalPounds = parseFloat(st) * 14 + parseFloat(lbs);
    return totalPounds / 2.20462;
  }

  function calculateBMI(heightMeters, weightKg) {
    return (weightKg / (heightMeters * heightMeters)).toFixed(1);
  }

  function getBMICategory(bmi) {
    if (!bmi) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  }

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
              onChange={(e) => setUnits(e.target.value)}
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
              onChange={(e) => setUnits(e.target.value)}
            />
            Imperial
          </label>
        </fieldset>

        {units === "metric" ? (
          <div className="inputs">
            <div className="input-container">
              <label htmlFor="height">Height</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  min="0"
                  step="0.1"
                />
                <h3 className="input-units">cm</h3>
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="weight">Weight</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min="0"
                  step="0.1"
                />
                <h3 className="input-units">kg</h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="inputs imperial">
            <div className="input-container imperial">
              <label htmlFor="imperialHeight">Height</label>
              <div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="imperialHeightFt"
                    name="imperialHeightFt"
                    value={imperialHeight.ft}
                    onChange={(e) =>
                      setImperialHeight({
                        ...imperialHeight,
                        ft: e.target.value,
                      })
                    }
                    min="0"
                    step="1"
                  />
                  <h3 className="input-units">ft</h3>
                </div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="imperialHeightIn"
                    name="imperialHeightIn"
                    value={imperialHeight.inches}
                    onChange={(e) =>
                      setImperialHeight({
                        ...imperialHeight,
                        inches: e.target.value,
                      })
                    }
                    min="0"
                    step="0.1"
                  />
                  <h3 className="input-units">in</h3>
                </div>
              </div>
            </div>
            <div className="input-container imperial">
              <label htmlFor="imperialWeight">Weight</label>
              <div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="imperialWeightSt"
                    name="imperialWeightSt"
                    value={imperialWeight.st}
                    onChange={(e) =>
                      setImperialWeight({
                        ...imperialWeight,
                        st: e.target.value,
                      })
                    }
                    min="0"
                    step="1"
                  />
                  <h3 className="input-units">st</h3>
                </div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="imperialWeightLbs"
                    name="imperialWeightLbs"
                    value={imperialWeight.lbs}
                    onChange={(e) =>
                      setImperialWeight({
                        ...imperialWeight,
                        lbs: e.target.value,
                      })
                    }
                    min="0"
                    step="0.1"
                  />
                  <h3 className="input-units">lbs</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>

      <div className="result-container">
        {inputComplete && bmi ? (
          <div>
            <p className="result-header">Your BMI is...</p>
            <h2 className="result">{bmi}</h2>
            <p>
              Your BMI suggests you're in the{" "}
              <span className="result-span">{getBMICategory(bmi)}</span> range.
            </p>
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

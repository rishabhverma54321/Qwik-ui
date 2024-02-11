import React, { useEffect, useState } from "react";
import "./index.css";

interface props {
  options: Array<string>;
  onChange: (value:string) => void;
  className: string;
  nothing:string;
}

const Slider: React.FC<props> = ({ options, onChange, className, nothing }) => {
  const [value, setValue] = useState<number>(0);
  const [forbiddenRanges, setForbiddenRange] = useState<{min:number, max:number}[]>([]);

  useEffect(() => {
    const variantLength = options?.length;
    const averageValue = 100 / variantLength;
    let initalValue = 0;
    const forbiddenValues = Array.from(
      { length: variantLength - 1 },
      (_, index) => index
    )?.map((item) => {
      initalValue += averageValue;
      return { min: initalValue - 0.5, max: initalValue + 0.5 };
    });
    !!variantLength && onChange(options[0]);
    console.log("forbiddenValues",forbiddenValues)
    setForbiddenRange(forbiddenValues);
  }, []);

  const isForbidden = (newValue: number) => {
    return forbiddenRanges.some(
      (range) => newValue >= range.min && newValue <= range.max
    );
  };

  const forgetForbidden = (value:number) => {
    const findRangeIndex = forbiddenRanges.findIndex(
      (range) => value < range.max
    );
    if (findRangeIndex === -1) {
      onChange(options[options.length - 1]);
    } else {
      onChange(options[findRangeIndex]);
    }
  };

  const handleChange = (event:any) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isForbidden(newValue)) {
      setValue(newValue);
      forgetForbidden(newValue);
    }
  };
  return (
    <div className={`productVariantslider ${className}_slider`}>
      <input
        id="weight-loss-slider"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className={`productVariantslider_input ${className}_slider_input`}
      />
      <div className={`productVariantslider_labels ${className}_slider_labels`}>
        {options?.map((item) => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

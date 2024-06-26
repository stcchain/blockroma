import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const DarkModeToggle: React.FC = () => {
  const { themeCode } = useSelector(
    (state: { base: { themeCode: "dark" | "light" } }) => ({
      themeCode: state.base.themeCode,
    }),
  );
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({
      type: "SET_THEME",
      payload: themeCode === "dark" ? "light" : "dark",
    });
  };

  return (
    <button
      className="dark-mode-changer"
      id="dark-mode-changer"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16}>
        <path
          fill="#9B62FF"
          fillRule="evenodd"
          d="M14.88 11.578a.544.544 0 0 0-.599-.166 5.7 5.7 0 0 1-1.924.321c-3.259 0-5.91-2.632-5.91-5.866 0-1.947.968-3.759 2.59-4.849a.534.534 0 0 0-.225-.97A5.289 5.289 0 0 0 8.059 0C3.615 0 0 3.588 0 8s3.615 8 8.059 8c2.82 0 5.386-1.423 6.862-3.806a.533.533 0 0 0-.041-.616z"
        />
      </svg>
    </button>
  );
};

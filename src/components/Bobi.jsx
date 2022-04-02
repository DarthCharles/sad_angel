import React from "react";

import { useMaptasticRegister } from "../hooks";

export const Bobi = ({ maptasticId }) => {
  useMaptasticRegister(maptasticId);

  return (
    <img
      style={{ height: 500, width: 300 }}
      id={maptasticId}
      src="https://user-images.githubusercontent.com/7410981/160744604-fe3956ef-525a-41a9-b662-2f48bda0d335.png"
      alt="bobi"
    />
  );
};

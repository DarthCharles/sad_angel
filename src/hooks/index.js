import { useContext, useEffect, createContext, useMemo } from "react";

export const MaptasticContext = createContext({ maptastic: null });

export const useGetLocalStorageItem = (itemId) => {
  return useMemo(() => {
    const item = localStorage.getItem(itemId);
    return JSON.parse(item) || [];
  }, [itemId]);
};

export const useMaptasticRegister = (maptasticId) => {
  const { maptastic } = useContext(MaptasticContext);
  const layers = useGetLocalStorageItem("maptastic.layers");

  useEffect(() => {
    if (maptastic && maptasticId) {
      const coordinates = layers.find(
        (layer) => layer.id === maptasticId
      )?.targetPoints;
      maptastic.addLayer(maptasticId, coordinates);
    }
  }, [layers, maptastic, maptasticId]);
};

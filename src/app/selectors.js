import React from "react";
import { useSelector, useDispatch } from "react-redux";

const useSelectors = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);
  const type = useSelector((state) => state.user.type);

  return {
    error,
    dispatch,
    loading,
    type
  };
};

export default useSelectors;

"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

const LayoutLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? <Loader /> : null;
};

export default LayoutLoader;

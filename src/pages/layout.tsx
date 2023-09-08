import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loading ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Image from 'next/image'

// Data
import { showResume } from "../data/portfolio.json";
import data from "../data/portfolio.json";
import { useTheme } from "next-themes";

const Resume = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mount, setMount] = useState(false);

   useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
      </div>
      <div className="container mx-auto mb-10 flex items-center justify-center">
        <Image src="/images/Collin_Prusse_Resume_2026.jpg" alt="Resume" height={792} width={612}/>
      </div>
        
    </>
  );
};

export default Resume;

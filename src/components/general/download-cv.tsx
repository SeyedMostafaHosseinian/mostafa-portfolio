"use client";

import Button from "@/components/general/button";

const DownloadCV = () => {
  return (
    <Button
      className="disabled:cursor-not-allowed"
      disabled
      onClick={() => window?.open("/files/mostafa-cv-2023.pdf", "_blank")}
    >
      Download Resume
    </Button>
  );
};

export default DownloadCV;

import { useState } from "react";

export default function PreviousPapers() {

  const papers = [
    {
      id: 1,
      exam: "UPSC Prelims 2023",
      file: "/papers/upsc_prelims_2023.pdf"
    },
    {
      id: 2,
      exam: "SSC CGL 2022",
      file: "/papers/ssc_cgl_2022.pdf"
    },
    {
      id: 3,
      exam: "TNPSC Group 1 2023",
      file: "/papers/tnpsc_group1_2023.pdf"
    },
    {
      id: 4,
      exam: "Banking IBPS PO 2022",
      file: "/papers/ibps_po_2022.pdf"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-20 py-10">

      <h1 className="text-3xl font-bold mb-10 dark:text-white">
        Previous Year Question Papers
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex justify-between items-center"
          >
            <span className="dark:text-white font-medium">
              {paper.exam}
            </span>

            <a
              href={paper.file}
              download
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Download
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
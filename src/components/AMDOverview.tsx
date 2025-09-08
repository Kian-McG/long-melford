"use client";

import React from "react";

const AMDs = [
  {
    _id: '1',
    title: 'test'
  },{
    _id: '2',
    title: 'test'
  },{
    _id: '3',
    title: 'test'
  },{
    _id: '4',
    title: 'test'
  }
]

const AMDOverview = () => {
  return (
    <section className="h-[80vh] bg-background ">
      <h2 className="text-4xl font-bold text-center py-10">Agendas, Minutes & Reports</h2>
      <div className="grid grid-cols-3 gap-4 container">
        {AMDs.map((amd) => (
          <div key={amd._id} className="p-4 border-b">
            <h2 className="text-xl font-bold">{amd.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AMDOverview;

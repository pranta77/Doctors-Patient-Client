import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Calendar({ setSelected, selected }) {
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
    </div>
  );
}

import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-day-picker/dist/style.css";

export function Calendar({ className = "", ...props }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-4 shadow-sm ${className}`}>
      <DayPicker
        showOutsideDays
        components={{
          IconLeft: () => <ChevronLeft className="w-4 h-4 text-gray-600" />,
          IconRight: () => <ChevronRight className="w-4 h-4 text-gray-600" />
        }}
        classNames={{
          caption: "flex justify-between items-center mb-3",
          caption_label: "text-sm font-semibold text-gray-800",
          nav: "flex items-center gap-1",
          nav_button:
            "p-1 rounded-md hover:bg-gray-100 transition",
          table: "w-full",
          head_cell: "text-xs text-gray-400 font-medium",
          row: "flex w-full mt-1",
          day: "w-9 h-9 flex items-center justify-center rounded-md text-sm hover:bg-gray-100 transition",
          day_selected: "bg-violet-600 text-white hover:bg-violet-600",
          day_today: "border border-violet-500 text-violet-600",
          day_outside: "text-gray-300",
          day_disabled: "text-gray-300 opacity-50"
        }}
        {...props}
      />
    </div>
  );
}
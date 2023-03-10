import { useEffect, useState } from "react";
import dayjs from "dayjs";

import api from "../lib/axios";
import { generateDays } from "../utils/generate-days";
import { HabitDay } from "./HabitDay";

const summaryDates = generateDays();
const minDays = 18 * 7; // 18 weeks
const amountOfDaysToFill = minDays - summaryDates.length;

type ISummary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}

export function SummaryTable() {
  const [summary, setSummary] = useState<ISummary[]>([]);

  useEffect(() => {
    api.get('summary').then((response) => {
      setSummary(response.data);
    })
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows grid-flow-row gap-3">
        <div className="diasem">D</div>
        <div className="diasem">S</div>
        <div className="diasem">T</div>
        <div className="diasem">Q</div>
        <div className="diasem">Q</div>
        <div className="diasem">S</div>
        <div className="diasem">S</div>
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {
          summary.length > 0 && summaryDates.map(date => {
            const dayInSummary = summary.find(day => {
              return dayjs(date).isSame(day.date, 'day');
            })

            return (
              <HabitDay
                key={date.toString()}
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
              />
            )
          })
        }
        {
          amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill })
            .map((_, index) => (
              <div key={index}
                className={`
                  w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg opacity-40
                  cursor-not-allowed
                `}
              />
            ))
        }
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import dayjs from 'dayjs';

import api from '../lib/axios';

interface HabitsInfo {
  possibleHabits: Array<{
    id: string;
    title: string;
    created_at: string;
  }>
  completedHabits: string[];
}

interface Props {
  date: Date;
  onCompletedChanged(completed: number): void;
}

export function HabitsList({ date, onCompletedChanged } : Props) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  async function handleToggleHabit(habitId: string) {
    const habitCompleted = habitsInfo!.completedHabits.includes(habitId);
    let completedHabits: string[] = [];

    await api.patch(`habits/${habitId}/toggle`);

    if (habitCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId);
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId];
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    })

    onCompletedChanged(completedHabits.length);
  }

  useEffect(() => {
    api.get('day', {
      params: {
        date: date.toISOString(),
      }
    }).then(response => {
      setHabitsInfo(response.data);
    })
  }, [])

  const pastDay = dayjs(date).endOf('day').isBefore(new Date());

  return (
    <div className="mt-6 flex flex-col gap-3">
      {
        habitsInfo?.possibleHabits.map(habit => (
          <Checkbox.Root
            key={habit.id}
            disabled={pastDay}
            checked={habitsInfo.completedHabits.includes(habit.id)}
            onCheckedChange={() => handleToggleHabit(habit.id)}
            className='flex items-center gap-3 group'
          >
            <div className={`
              h-8 w-8 rounded-lg flex items-center justify-center
              bg-zinc-900 border-2 border-zinc-800
              group-data-[state=checked]:bg-green-500
              group-data-[state=checked]:border-green-500
            `}>
              <Checkbox.Indicator>
                <Check size={20} weight="bold" className="text-white" />
              </Checkbox.Indicator>
            </div>
            <span className={`
              font-semibold text-xl text-white leading-tight
              group-data-[state=checked]:line-through
              group-data-[state=checked]:text-zinc-400
            `}>
              {habit.title}
            </span>
          </Checkbox.Root>
        ))
      }
    </div>
  )
}

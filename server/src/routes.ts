import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from 'zod';
import dayjs from "dayjs";

export async function appRoutes(app: FastifyInstance) {

  app.get('/', () => {
    return 'NLW #11 Setup'
  });


  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6))
    })

    const { title, weekDays } = createHabitBody.parse(request.body);

    // data atual, zerando a hora, minutos e segundos
    const today = dayjs().startOf('day').toDate();

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map(day => {
            return {
              week_day: day,
            }
          })
        }
      }
    });
  });


  app.get('/day', async (request, response) => {
    const getDayParams = z.object({
      date: z.coerce.date()
    })

    const { date } = getDayParams.parse(request.query);
    const weekDay = dayjs(date).get('day'); // day = dia da semana; date = dia do mês

    // todos os hábitos possíveis
    // hábitos que já foram completados

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay
          }
        }
      }
    })

    const parsedDate = dayjs(date).startOf('day');
    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate(),
        },
        include: {
          dayHabits: true,
        }
    })

    const completedHabits = day?.dayHabits.map(day => {
      return day.habit_id
    })

    return {
      possibleHabits,
      completedHabits,
    }
  })

}

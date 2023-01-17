import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient()

app.register(cors);

app.get('/', () => {
    return 'NLW #11 Setup'
});

app.get('/habits', async () => {
  const habits = await prisma.habit.findMany();
  return habits
});

app.listen({
  port: 3333,
})
.then(() => console.log('Servidor rodando na porta 3333'));

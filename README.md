<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/nlw-setup/blob/master/web/src/assets/logo.svg" /></td>
    <td><h1>NLW-HABITS</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação desenvolvida durante o NLW Setup, promovido pela Rocketseat.<br />
Durante o evento, foram desenvolvidas 3 aplicações, uma API em Node, uma aplicação React com Vite e um App em React Native. Infelizmente, não tive tempo de terminar a aplicação mobile. Mas a API e a aplicação Web estão completas.<br />
A aplicação web permite cadastrar tarefas diárias. Conforme vou concluindo as tarefas, a cor do dia fica mais clara.<br />
<br />

## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node__ + __Fastify__ + __Typescript__
  * __Prisma ORM__ com SQLite
  * __DayJs__ para lidar com datas
  * Validação dos dados com __Zod__
* Front-end
  * __React__ + __Vite__ + __Typescript__
  * __TailwindCSS__ para estilização
  * __Phosphor-React__ para ícones
  * __Radix-UI__ para Checkbox e Popover
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/luiizsilverio/nlw-setup
```
* Back-end
  * Renomeie o arquivo __.env.example__ para __.env__.
```bash
$ cd server
$ npm install
$ npm run dev
```
* Front-end
```bash
$ cd ..
$ cd web
$ npm install
$ npm run dev
```

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/nlw-setup/blob/master/web/src/assets/habits.gif)

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)

export const apps = [
  {
    id: 'firstapp',
    title: 'First App',
    load: () => import(/* webpackChunkName: "firstapp" */ './FirstApp'),
  },
  {
    id: 'secondapp',
    title: 'Second App',
    load: () => import(/* webpackChunkName: "secondapp" */ './SecondApp'),
  },
];

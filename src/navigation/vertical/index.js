export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Users',
    icon: 'UserIcon',
    children: [
      {
        title: 'Add',
        route: { name: 'users-add', params: { id: 4987 } },
      },
      {
        title: 'List',
        route: { name: 'users-list', params: { id: 4987 } },
      },
      {
        title: 'View',
        route: { name: 'users-view', params: { id: 4987 } },
      },
    ],
  },
  {
    title: 'Cars',
    icon: 'LifeBuoyIcon',
    children: [
      {
        title: 'List',
        route: { name: 'cars-list', params: { id: 4987 } },
      },
      {
        title: 'Model',
        route: { name: 'cars-model', params: { id: 4987 } },
      },
      {
        title: 'Add',
        route: { name: 'cars-add', params: { id: 4987 } },
      },
    ],
  },
  {
    title: 'Mission',
    icon: 'ArchiveIcon',
    children: [
      {
        title: 'Add',
        route: { name: 'mission-add', params: { id: 4987 } },
      },
      {
        title: 'List',
        route: { name: 'missions-list', params: { id: 4987 } },
      },
      {
        title: 'Mission Type',
        route: { name: 'missions-type', params: { id: 4987 } },
      },
      {
        title: 'Mission State',
        route: { name: 'missions-state', params: { id: 4987 } },
      },
    ],
  },
  {
    title: 'Point of Sale',
    icon: 'ShoppingCartIcon',
    route: 'missions-point-sale',
  },
  {
    title: 'Invoice',
    icon: 'FileTextIcon',
    children: [
      {
        title: 'List',
        route: 'apps-invoice-list',
      },
      {
        title: 'Preview',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Edit',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
      },
      {
        title: 'Add',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
]

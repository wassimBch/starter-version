export default {
  header: 'Pages',
  icon: 'FileIcon',
  children: [
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
          title: 'List',
          route: { name: 'users', params: { id: 4987 } },
        },
        {
          title: 'Add',
          route: { name: '' },
        },
      ],
    },
  ],
}

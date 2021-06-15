const Menu = [
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    title: 'Concours',
    group: 'apps',
    icon: 'chat_bubble',
    target: '_blank',
    name: 'history_edu',
    href: '/concours/main',
    items: [
      {name: 'Inscription', title: 'Inscription', href: '/concours/inscription'},
      {name: 'Epreuves', title: 'Epreuves', badge: 'new', href: '/concours/epreuves'},
      {name: 'Resultats', title: 'Resultats', href: '/widgets/chart'},
    ]
  },
  {
    title: 'Inscription',
    group: 'apps',
    name: 'Mail',
    target: '_blank',
    icon: 'edit',
    href: '/mail/all',
    items: [
      {name: 'Theses', title: 'Theses', href: '/widgets/social'},
      {name: 'Affectation', title: 'Affectations', badge: 'new', href: '/widgets/statistic'},
    ]
  },
  {
    title: 'Fomation',
    group: 'apps',
    name: 'Media',
    icon: 'feed',
    href: '/media',
    items: [
      {name: 'Reinscription', title: 'Reinscription', href: '/widgets/social'},
      {name: 'Jury', title: 'Jury', badge: 'new', href: '/widgets/statistic'},
    ]
  },
  {
    title: 'Stage',
    group: 'widgets',
    component: 'widgets',
    icon: 'menu_book',
    items: [
      {name: 'Stage', title: 'Stage', href: '/widgets/social'},
      {name: 'Deplacement', title: 'Deplacement', badge: 'new', href: '/widgets/statistic'},
      {name: 'Retour De Stage', title: 'Retour De Stage', href: '/widgets/chart'},
    ]
  },
  {
    title: 'Soutenance',
    group: 'widgets',
    component: 'widgets',
    icon: 'architecture',
    items: [
      {name: 'Experts', title: 'Experts', href: '/widgets/social'},
      {name: 'Thèses', title: 'Thèses', badge: 'new', href: '/widgets/statistic'},
      {name: 'Jury', title: 'Jury', href: '/widgets/chart'},
    ]
  },
  
  {divider: true},
  {
    title: 'Notifications',
    group: 'extra',
    icon: 'notifications',
    href: '/login'
  },
  {
    title: 'Contact Us',
    group: 'extra',
    icon: 'email',
    href: '/login'
  },
  {
    title: 'Logout',
    group: 'extra',
    icon: 'logout',
    href: '/login'
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;

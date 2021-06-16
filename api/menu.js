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
      {name: 'Resultats', title: 'Resultats', href: '/concours/resultats'},
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
      {name: 'Theses', title: 'Theses', href: '/inscription/theses'},
      {name: 'Affectation', title: 'Affectations', badge: 'new', href: '/inscription/affectation'},
    ]
  },
  {
    title: 'Fomation',
    group: 'apps',
    name: 'Media',
    icon: 'feed',
    href: '/media',
    items: [
      {name: 'Reinscription', title: 'Reinscription', href: '/formation/reinscription'},
      {name: 'Jury', title: 'Jury', badge: 'new', href: '/formation/jury'},
    ]
  },
  {
    title: 'Stage',
    group: 'widgets',
    component: 'widgets',
    icon: 'menu_book',
    items: [
      {name: 'Stage', title: 'Stage', href: '/stages/stage'},
      {name: 'Deplacement', title: 'Deplacement', badge: 'new', href: '/stages/deplacement'},
      {name: 'Retour De Stage', title: 'Retour De Stage', href: '/stages/retour'},
    ]
  },
  {
    title: 'Soutenance',
    group: 'widgets',
    component: 'widgets',
    icon: 'architecture',
    items: [
      {name: 'Experts', title: 'Experts', href: '/soutenance/experts'},
      {name: 'Thèses', title: 'Thèses', badge: 'new', href: '/soutenance/theses'},
      {name: 'Jury', title: 'Jury', href: '/soutenance/jury'},
    ]
  },
  
  {divider: true},
  {
    title: 'Ordre de Jour',
    group: 'extra',
    icon: 'list_alt',
    href: '/ordre'
  },
  {
    title: 'Contact Nous',
    group: 'extra',
    icon: 'email',
    href: '/contactUs'
  },
  {divider: true},
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

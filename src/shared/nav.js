class Nav {
  constructor(title) {
    this.title = title;
  }

  main() {
    return {
      title: this.title,
      links: [
        'download',
        'features',
        'contact',
      ],
    };
  }
}

export default Nav;

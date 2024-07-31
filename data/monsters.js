const monsters = {
  Emby: {
    position: {
      x: 280,
      y: 325
    },
    image: {
      src: './img/empre.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    name: 'Emprendedor',
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  Draggle: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/fisca.png'
    },
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    isEnemy: true,
    name: 'Fiscalizador SII',
    attacks: [attacks.Tackle, attacks.Fireball]
  }
}

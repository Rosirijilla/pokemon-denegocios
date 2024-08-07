const monsters = {
  Emby: {
    position: {
      x: 100,
      y: 200
    },
    image: {
      src: './img/principal.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    name: 'Emprendedor',
    attacks: [attacks.Tacleada, attacks.BolaFuego]
  },
  Draggle: {
    position: {
      x: 700,
      y: -10
    },
    image: {
      src: './img/villano.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Fiscalizador SII',
    attacks: [attacks.Tacleada, attacks.BolaFuego]
  }
}

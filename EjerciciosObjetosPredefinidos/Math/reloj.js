const relojDigital = s => {
    let tiempo = [parseInt(s / 3600) % 24, parseInt(s % 3600 / 60), s % 3600 % 60]
    return tiempo.map(n => (n + '').padStart(2, 0)).join(':')
  }
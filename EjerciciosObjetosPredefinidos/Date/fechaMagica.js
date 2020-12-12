const fechaMagica = str => {
    const [day, month, year] = str.split(' ').map(Number);
  
    return String(year).endsWith(day * month);
};
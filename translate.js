const translate = {
  ptBr: {
    today: "Hoje",
    yesterday: "Ontem",
    tomorrow: "Amanhã",
    daysAgo: "dias atrás",
    inWeek: "semana que vem",
    weekAgo: "semana passada",
    weeksAgo: "semana atras ago",
    in: "em",
    day: 'dia',
    days: "dias",
    week: "semana",
    weeks: "semanas",
    dayName: new Array(
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado"
    ),
    monthName: new Array(
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "Maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ),
    getDate: function(date) {
      let dateArray = date.split(" ");
      const hasHours = dateArray.length === 2;

      if (!hasHours) {
        dateArray = date.split("/");
        console.log('dateArray', dateArray);
        return new Date(dateArray[2], parseInt(dateArray[1]) - 1,dateArray[0]);
      }
      const dayMonthYear = dateArray[0].split("/");
      const hours = dateArray[1].split(':');
      return new Date(dayMonthYear[2],parseInt(dateArray[1]) - 1,dayMonthYear[0], hours[0], hours[1], hours[2]);
    }
  },
  enUs: {
    today: "Today",
    yesterday: "Yesterday",
    tomorrow: "Tomorrow",
    daysAgo: "days ago",
    inWeek: "in one week",
    weekAgo: "one week ago",
    weeksAgo: "weeks ago",
    in: "in",
    day: 'day',
    days: "days",
    week: "week",
    weeks: "weeks",
    dayName: new Array(
      "sunday",
      "monday",
      "tuesday",
      "wednsday",
      "thursday",
      "friday",
      "saturday"
    ),
    monthName: new Array(
      "january",
      "febrary",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ),
    getDate: function(date) {
      return new Date(date);
    }
  }
};

module.exports = translate;

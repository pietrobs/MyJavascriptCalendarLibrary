const translations = require("./translate.js");

class MyDate {
  constructor(lang) {
    this.lang = this._getLang(lang);
  }

  getFriendlyDate(dateStr) {
    const nowTimestamp = Date.now();
    const date = this.lang.getDate(dateStr);
    console.log(`Received: ${dateStr} | Formatted: ${date}`);
    const dateTimestamp = new Date(date).getTime();
    const diff = this._diff(nowTimestamp, dateTimestamp);
    const days = this._timestampToDays(diff);

    console.log("Days:", days);

    if (days === 0) {
      return this.lang["today"];
    } else if (days === 1) {
      return this.lang["yesterday"];
    } else if (days === -1) {
      return this.lang["tomorrow"];
    } else if (days >= 2 && days <= 6) {
      return this._daysAgo(days);
    } else if (days === 7) {
      return this.lang["weekAgo"];
    } else if (days === -7) {
      return this.lang["inWeek"];
    } else if (days === 14 || days === 21) {
      return this._weeksAgo(days);
    } else if (days === -14 || days === -21) {
      return this._inWeeks(days);
    } else {
      return dateStr;
    }
  }

  _getLang(userLang) {
    let lang;
    const navigator = null;

    if (userLang) {
      lang = userLang;
    } else if (navigator) {
      lang = navigator.language;
    } else {
      lang = "en-US";
    }

    switch (lang) {
      case "pt-BR":
        return translations["ptBr"];
      case "en-US":
        return translations["enUs"];
      default:
        return translations["enUs"];
    }
  }

  _timestampToDays(timestamp) {
    return Math.floor(timestamp / (1000 * 60 * 60 * 24));
  }
  _diff(date_1, date_2, forcePositive) {
    return forcePositive ? Math.abs(date_1 - date_2) : date_1 - date_2;
  }
  _daysAgo(days) {
    return `${days} ${this.lang["daysAgo"]}`;
  }
  _weeksAgo(weeks) {
    return `${weeks} ${this.lang["weeksAgo"]}`;
  }
  _inDays(days) {
    return `${this.lang["in"]} ${Math.abs(days)} ${this.lang["days"]}`;
  }
  _inWeeks(weeks) {
    return `${this.lang["in"]} ${Math.abs(weeks)/7} ${this.lang["weeks"]}`;
  }
}

const myDate = new MyDate("pt-BR"); // 'pt-BR' or 'en-US'

const friendlyDate = myDate.getFriendlyDate("26/02/2020");
console.log(friendlyDate);

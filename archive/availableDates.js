
    export const availableDates = () => {
        const dates = [];
        for (let i = Date.now() + 86400000; i <= Date.now() + 1296000000; i+= 86400000) {
            const date = new Date(i);
            dates.push(date.toString().substring(0, 10))
        }
        dates.map( date => d3.select(".date .dropdown-content").append("p").attr("data-value", date).text(date) )
    }
    
    export const availableTimes = (date) => {
        const hours = {
          "Mon": [17, 21],
          "Tues": [17, 21],
          "Wed": [17, 21],
          "Thurs": [17, 21],
          "Fri": [17, 21],
          "Sat": [12, 21],
          "Sat": [12, 20],
        }
        const dayOfWeek = date.substring(0, 3);
        const timeRange = hours[dayOfWeek];
        const possibleTimes = [];
        for (let i = timeRange[0]; i <= timeRange[1]; i++) {
          const time = i.toString()
          possibleTimes.push(time + ":00");
          possibleTimes.push(time + ":30");
        }
        document.querySelector(".time .dropdown-content").textContent = '';
        possibleTimes.map( time => d3.select(".time .dropdown-content").append("p").attr("data-value", time).text(time) )
      }






const hjalmar = document.getElementById('Hjalmar')
const pontus = document.getElementById('Pontus')
const olof = document.getElementById('Olof')

const duty = ['Toa', 'Sopor', 'Golv']

//code from https://www.geeksforgeeks.org/calculate-current-week-number-in-javascript/
const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 1)
const days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000)) - 1 //minus one because we end the week on monday
 
const week = Math.ceil(days / 7);

hjalmar.appendChild(createDuty(duty[week % 3]))
pontus.appendChild(createDuty(duty[(week + 1) % 3]))
olof.appendChild(createDuty(duty[(week + 2) % 3]))


function createDuty(week, duty) {
  const dutyElement = document.createElement('td')
  dutyElement.innerHTML = week
  return dutyElement
}

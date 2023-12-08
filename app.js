function calculateDateDifference() {
  const dateForm1 = document.getElementById('dateForm1');
  const dateForm2 = document.getElementById('dateForm2');

  const date1 = new Date(`${dateForm1.date1.value}T${dateForm1.time1.value}`);
  const date2 = new Date(`${dateForm2.date2.value}T${dateForm2.time2.value}`);

  console.log(date1)

  const resultElement = document.getElementById('differenceResult');

  if (isNaN(date1) || isNaN(date2)) {
    resultElement.innerHTML = '<p>Please enter valid dates.</p>';
  } else {
    const timeDifference = Math.abs(date2 - date1);

    const yearsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60) % 24);
    const minutesDifference = Math.floor(timeDifference / (1000 * 60) % 60);
    const secondsDifference = Math.floor(timeDifference / 1000 % 60);

    resultElement.innerHTML = `
<h3>Difference</h3>
<div id="differenceWrapper">
                <p>Years: ${yearsDifference}</p>
                <p>Months: ${monthsDifference}</p>
                <p>Days: ${daysDifference}</p>
                <p>Hours: ${hoursDifference}</p>
                <p>Minutes: ${minutesDifference}</p>
                <p>Seconds: ${secondsDifference}</p>
</div>
            `;
  }
}

function changeBackgroundColor(colorPicker) {
  document.body.style.backgroundColor = colorPicker.value;
}

function changeTextColor(colorPicker) {
  document.body.style.color = colorPicker.value;
}

function trackInputChange(event) {
  const inputId = event.target.id;
  const inputValue = event.target.value;
  const changesList = document.getElementById('changesList');

  const changeItem = document.createElement('li');
  changeItem.textContent = `user changed value ${inputValue} from ${inputId}`;

  changesList.appendChild(changeItem);
}

document.addEventListener('DOMContentLoaded', function () {
  const dateForm1 = document.getElementById('dateForm1');
  const dateForm2 = document.getElementById('dateForm2');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultElement = document.getElementById('result');

  dateForm1.date1.addEventListener('input', calculateDateDifference);
  dateForm2.date2.addEventListener('input', calculateDateDifference);

  dateForm1.time1.addEventListener('input', calculateDateDifference);
  dateForm2.time2.addEventListener('input', calculateDateDifference);


  const bgColorPicker = document.getElementById('bgColorPicker');
  bgColorPicker.addEventListener('input', () => changeBackgroundColor(bgColorPicker));

  const fgColorPicker = document.getElementById('fgColorPicker');
  fgColorPicker.addEventListener('input', () => changeTextColor(fgColorPicker));

  // Track changes in date inputs
  dateForm1.date1.addEventListener('input', trackInputChange);
  dateForm2.date2.addEventListener('input', trackInputChange);

  dateForm1.time1.addEventListener('input', trackInputChange);
  dateForm2.time2.addEventListener('input', trackInputChange);

  // Track changes in color pickers
  bgColorPicker.addEventListener('input', trackInputChange);
  fgColorPicker.addEventListener('input', trackInputChange);
});

window.onload = function () {
    function dateDiffInDays(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    document.body.style.backgroundImage = 'url(santa.png)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'top center';


    let now_date = new Date();
    let next_year = now_date.getFullYear() + 1;
    let new_year = new Date(`1/1/${next_year}`);
    let till_the_new_year = dateDiffInDays(now_date, new_year);
    let days_word = null;
    if([1].includes(till_the_new_year % 10) && till_the_new_year % 100 != 11){
        days_word = 'день';
    } else if([2, 3, 4].includes(till_the_new_year % 10)){
        days_word = 'дня';
    } else {
        days_word = 'дней';
    }

    document.querySelector('.content').style.marginTop = `${window.screen.height / 20}px`;
    document.querySelector('.counter-pre').innerHTML = 'До Нового Года';
    document.querySelector('.counter-time').innerHTML = `${till_the_new_year} ${days_word}`;
    }

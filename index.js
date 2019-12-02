window.onload = function () {
    let scr_w = window.screen.width;
    let scr_h = window.screen.height;

    document.body.style.backgroundImage = "url(santa.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = '33% 10%';


    let content = document.querySelector('.content');
    content.style.marginLeft = scr_w / 8 + 'px';
    content.style.marginTop = scr_h / 20 + 'px';
    console.log(Math.floor(scr_h / 20));

    // let header = document.querySelector('.counter-header');
    // header.style.position = '70% 10%';

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    function dateDiffInDays(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }

    let now_date = new Date();
    let next_year = now_date.getFullYear() + 1;
    let new_year = new Date('1/1/' + next_year);
    let till_the_new_year = dateDiffInDays(now_date, new_year);
    let days_word = null;
    if([1].includes(till_the_new_year % 10) && till_the_new_year % 100 != 11){
        days_word = 'день';
    } else if([2, 3, 4].includes(till_the_new_year % 10)){
        days_word = 'дня';
    } else {
        days_word = 'дней';
    }

    let date = document.querySelector('.counter-time');
    date.innerHTML = till_the_new_year + ' ' + days_word;
    console.log();
    }

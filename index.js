const greetings = '“Hello World”';

      function addGreetings(string) {
          const paragraphEl = document.querySelector('.js-greetings');
      paragraphEl.append(string);
      };

      addGreetings(greetings);
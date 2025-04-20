// flash.js

(() => {

  const vars = ['--pressed-color', '--member-bgcolor-odd', '--donation-bgcolor-odd'];

  const colors = ['#d3d3d3', '#f08080', '#808080'];

  let idx = 0;



  setInterval(() => {

    idx = (idx + 1) % colors.length;

    const c = colors[idx];

    vars.forEach(v =>

      document.documentElement.style.setProperty(v, c, 'important')

    );

  }, 1000); // change every second

})();
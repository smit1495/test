var sass = require('node-sass');
sass.render({
  file: "../css/styles.scss"
 
}, function(err, result) { console.log (err);
                          console.log (result);
                          console.log (JSON.stringify (result.map))
                         });

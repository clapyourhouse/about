require('watch').createMonitor('./',  {
  ignoreDotFiles: true
}, (monitor) => {
  monitor.files['./styles.scss'];
  monitor.on('changed', (func, current, prev) => {
    console.log('Changed', new Date());
    require('fs').writeFileSync(
      './styles.css',
      require('strip-bom')(
        require('node-sass').renderSync({
          file: './styles.scss',
          outputStyle: 'compressed'
        }).css.toString()
      )
    );
  });
});

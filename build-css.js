require('fs').writeFileSync(
  './styles.css',
  require('strip-bom')(
    require('node-sass').renderSync({
      file: './styles.scss',
      outputStyle: 'compressed'
    }).css.toString()
  )
);

function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/))  
//const brand_images = require.context('../../assets/images/brands', false, /\.(png|jpe?g|svg)$/);

export default images;
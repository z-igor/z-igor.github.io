function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => {
    let img = item.replace("./", '')
      .replace(/\.(png|jpe?g|svg)$/, '');

    images[img] = r(item).default;
  });

  return images;
}

export const covers = importAllImages(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

export const data = [{
    id: 'p1',
    priority: 1,
    title: "Mini constructor",
    description: "This mini constructor was developed via native javascript for view of first look",
    source: "../../works/njs0_mini-constructor/index.html",
    cover: '../../works/njs0_mini-constructor/mini-constructor.jpg',
    _cover: 'njs0_mini-constructor',
    coverBig: "",
    offUrl: "https://vk.com/doc2000002202_440831900?hash=d587464e78ed55cf9f&dl=4b5e0dfee2ac6c566e",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'p2',
    priority: 1,
    title: "Creative+",
    description: "Today’s neat little web design template is Creative+ – A minimal blog design layout. This clean and minimal design is ready to take straight into WordPress or your CMS of choice. Download this free PSD Blog template web design psd and get blogging!",
    source: "../../works/creative_plus/index.html",
    cover: "../../works/creative_plus/this_300.jpg",
    _cover: "creative_plus",
    coverOrig: "../../works/creative_plus/creative_orig.png",
    offUrl: "http://blazrobar.com/free-psd-website-templates/creative-a-free-psd-blog-template-web-design/",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'p3',
    priority: 1,
    title: "Dsgn",
    description: "DSGN - Free .PSD Template",
    source: "../../works/dsgn/index.html",
    cover: "../../works/dsgn/this_300.jpg",
    _cover: "dsgn",
    coverOrig: "../../works/dsgn/dsgn_orig_3000-7600.jpg",
    offUrl: "http://theuncreativelab.com/portfolio/dsgn-free-psd-template/",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'p4',
    priority: 1,
    title: "Gift shop",
    description: "Giftshop is a, you’ve guessed it, template for gift shops. Flat and modern design will ensure your products are showcased in a unique way.",
    source: "../../works/gift_shop/index.htm",
    cover: "../../works/gift_shop/this_300.jpg",
    coverOrig: "../../works/gift_shop/gift_shop_1140.jpg",
    offUrl: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/Giftshop_Free_PSD_eCommerce_Template.png",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'p5',
    priority: 1,
    title: "Golden",
    description: "A clean, stylish, one page Bootstrap portfolio theme perfect for your agency or small business.",
    source: "../../works/golden_theme/index.html",
    cover: "../../works/golden_theme/this_300.jpg",
    coverOrig: "../../works/golden_theme/golden_theme_orig.jpg",
    offUrl: "https://startbootstrap.com/template-overviews/agency/",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'p6',
    priority: 1,
    title: "Wise advice 1C",
    description: "Известная и признанная консалтинговая компания, которая вносит ощутимый вклад в развитие цивилизованного и эффективного бизнес-сообщества",
    source: "../../works/WiseAdvice/index.html",
    cover: "../../works/WiseAdvice/wiseAdwice.jpg",
    coverOrig: "",
    offUrl: "https://wiseadvice.ru/o-kompanii/",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'p7',
    priority: 1,
    title: "Business Template Design",
    description: "Included in the download is the complete design for a homepage including sections for featured content, screenshots, screencasts, various features, newsletter signup and much more – everything you would need to start building a full-on corporate website",
    source: "../../works/redux/index.html",
    cover: "../../works/redux/this_300.jpg",
    coverOrig: "../works/redux/redux_orig.jpg",
    offUrl: "http://www.premiumpixels.com/freebies/business-website-template-design/",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'p8',
    priority: 1,
    title: "Treehouse (PSD Template)",
    description: "Today’s very cool and sleek download is from our kind friends over at <a href='http://freebiesxpress.com/'>http://freebiesxpress.com/</a>. This bright and spacious design suits startup companies or even ecommerce websites.",
    source: "../../works/tree_house/index.html",
    cover: "../../works/tree_house/this_300.jpg",
    coverOrig: "../works/redux/redux_orig.jpg",
    offUrl: "http://blazrobar.com/free-psd-website-templates/treehouse-website-psd-template/",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'p9',
    priority: 1,
    title: "TwoBytes (PSD Template)",
    description: "TwoBytes – Free PSD Website Template. Meet TwoBytes – A free minimal PSD website template. Free to use for just about anything.",
    source: "../../works/two_bytes/index.html",
    cover: "../../works/two_bytes/this_300.jpg",
    coverOrig: "../../works/two_bytes/two_bytes_orig.jpg",
    offUrl: "http://blazrobar.com/free-psd-website-templates/twobytes-free-psd-website-template/",
    stack: ['HTML', 'CSS', 'JS'],
  },
];
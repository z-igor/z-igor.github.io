function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => {
    let img = item.replace("./", '')
      .replace(/\.(png|jpe?g|svg)$/, '');

    images[img] = r(item).default;
  });

  return images;
}

export const covers = importAllImages(require.context('./asserts', false, /\.(png|jpe?g|svg)$/));

export const data = [{
    id: 'p1',
    priority: 1,
    title: "Mini constructor",
    description: "This mini constructor was developed via native javascript for view of first look",
    source: "../../works/njs0_mini-constructor/index.html",
    cover: '../../works/njs0_mini-constructor/index.html',
    _cover: 'njs0_mini-constructor',
    coverBig: "",
    offUrl: "https://vk.com/doc2000002202_440831900?hash=d587464e78ed55cf9f&dl=4b5e0dfee2ac6c566e",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    priority: 1,
    id: 'p2',
    title: "Creative+",
    description: "Today’s neat little web design template is Creative+ – A minimal blog design layout. This clean and minimal design is ready to take straight into WordPress or your CMS of choice. Download this free PSD Blog template web design psd and get blogging!",
    source: "../works/creative_plus/index.html",
    cover: "",
    _cover: "creative_plus",
    coverOrig: "../works/creative_plus/creative_orig.png",
    offUrl: "http://blazrobar.com/free-psd-website-templates/creative-a-free-psd-blog-template-web-design/",
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    priority: 1,
    id: 'p3',
    title: "Dsgn",
    description: "description",
    source: "source",
    cover: "",
    _cover: "dsgn",
    coverOrig: "../works/dsgn/dsgn_orig_3000-7600.jpg",
    offUrl: "http://theuncreativelab.com/portfolio/dsgn-free-psd-template/",
    stack: ['HTML', 'CSS', 'JS'],
  },
];

/* 
{
  id: "p4",
  title: "demo",
  description: "demo",
  source: "demo",
  cover: "demo",
  coverOrig: "demo",
  offUrl: "demo",
  stack: ['HTML', 'CSS', 'JS'],
} 
*/
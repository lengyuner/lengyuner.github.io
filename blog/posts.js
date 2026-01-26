// Single source of truth for curated posts shown on both:
// - /blog/index.html
// - /index.html (Blogs section)
//
// Edit this file to add/remove posts you want to expose.

window.BLOG_SECTIONS = [
  {
    id: "neuroscience",
    title: "Neuroscience",
    items: [
      { title: "Connectome Inspired Neural Network", html: "connectome inspired neural network.html" },
      { title: "The structure and function of the neuron", html: "neuron_strucutre_and_function/The structure and function of the neuron.html" },
      { title: "Spiking and nonspiking neurons", html: "NonSpiking/spiking and non spiking.html" },
      { title: "Some properties of Optic Lobe neurons", html: "expected_result.html" },
    ],
  },
  {
    id: "paper-reading-list",
    title: "Paper reading list",
    items: [
      { title: "My paper reading list", html: "paper reading list/paper reading list.html" },
      // { title: "activity_prediction", html: "paper reading list/activity_prediction.html" },
    ],
  },
  {
    id: "computer-science",
    title: "Computer Science",
    items: [
      { title: "A literature review on the MIA method", html: "MIA/literature_review_en.html" },
    ],
  },
  {
    id: "python",
    title: "Python",
    items: [
      { title: "Python related blogs: Jianshu (简书)", url: "https://www.jianshu.com/u/0dbe3ae461a3" },
    ],
  },
  {
    id: "external",
    title: "External",
    items: [
      { title: "A paper list for beginners in computational neuroscience", url: "https://docs.google.com/spreadsheets/d/1c7UO3auwha-We8rRa8Fus_IlSprgrrGrA0D7f7fNs48" },
    ],
  },
];



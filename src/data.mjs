export const brand = {
  name: 'GRANDIZ',
  legalName: 'Grandiz Timbers and Lumbers Private Limited',
  gst: '33AAJCG4182D1ZT',
  address: 'No. 3/63 B IV, Harbour Byepass Road, Thoothukudi, Tamil Nadu – 628008',
  places: [
    ['Thoothukudi', 'Principal place of business', 'No. 3/63 B IV, Harbour Byepass Road, Thoothukudi, Tamil Nadu – 628008'],
    ['Muttayyapuram', 'Additional business location', '4/296-3, Tiruchendur Main Road, Mullakadu, Muttayyapuram, Thoothukudi, Tamil Nadu – 628005'],
    ['Chinnamanur', 'Additional business location', '142, Kaspa Road, Uthamapalayam Thalluk, Chinnamanur, Theni, Tamil Nadu – 625515']
  ]
};

export const media = {
  door: {url:'https://images.pexels.com/photos/8134757/pexels-photo-8134757.jpeg?auto=compress&cs=tinysrgb&w=1920', alt:'Architectural inspiration: warm wood panelling and a contemporary doorway', credit:'Max Vakhtbovych', source:'https://www.pexels.com/photo/brown-wooden-door-near-brown-wall-8134757/'},
  interior: {url:'https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg?auto=compress&cs=tinysrgb&w=1800', alt:'Interior inspiration: a light-filled space with wooden furniture', credit:'Rachel Claire', source:'https://www.pexels.com/photo/interior-of-living-room-with-wooden-furniture-4846114/'},
  timber: {url:'https://images.pexels.com/photos/7055631/pexels-photo-7055631.jpeg?auto=compress&cs=tinysrgb&w=1600', alt:'Illustrative timber photograph showing the natural grain of cut logs', credit:'Pavel Danilyuk', source:'https://www.pexels.com/photo/tree-logs-in-sawmill-7055631/'},
  craft: {url:'https://images.pexels.com/videos/5895465/pexels-photo-5895465.jpeg?auto=compress&w=1260&h=750&dpr=2', alt:'Illustrative woodworking scene: a craftsperson shaping wood by hand', credit:'Gustavo Fring', source:'https://www.pexels.com/video/a-person-shaving-a-wood-5895465/'},
  film:'https://videos.pexels.com/video-files/5895465/5895465-uhd_2560_1440_30fps.mp4'
};

export const groups = [
  {id:'architectural', name:'Doors, windows & frames', short:'Architectural teak', image:'door', intro:'The first impression. The everyday touch. Teak for the details that define a space.'},
  {id:'living', name:'Furniture & interiors', short:'Spaces to live in', image:'interior', intro:'Bring the warmth and character of teak into furniture and interior applications.'},
  {id:'processed', name:'Boards & planks', short:'Ready for your craft', image:'craft', intro:'Processed teak for makers, workshops and the next stage of your project.'},
  {id:'timber', name:'Timber supply', short:'The material itself', image:'timber', intro:'Round logs, cut sizes and rough squares for your timber requirements.'}
];

export const products = [
  {slug:'teak-doors', name:'Teak doors', group:'architectural', image:'door', description:'A considered entrance begins with the material. Explore teak doors for homes, commercial spaces and architectural projects.', use:'Entrances and interior door requirements', ask:['Door dimensions and quantity','Indoor or entrance application','Preferred design and finish','Frame requirements']},
  {slug:'teak-windows', name:'Teak windows', group:'architectural', image:'door', description:'Teak windows bring the natural warmth of wood to the boundary between indoors and out.', use:'Residential and commercial window requirements', ask:['Opening dimensions','Window style and quantity','Glazing requirements','Preferred finish']},
  {slug:'door-frames', name:'Door frames', group:'architectural', image:'door', description:'Start with a well-considered frame. Discuss teak door frames for your building or renovation.', use:'New construction and replacement frames', ask:['Opening dimensions and section size','Quantity of frames','Door type','Delivery location']},
  {slug:'window-frames', name:'Window frames', group:'architectural', image:'door', description:'A natural foundation for your windows. Explore teak frame requirements with the Grandiz team.', use:'Window installations and architectural projects', ask:['Opening dimensions','Section size','Quantity','Glazing and installation requirements']},
  {slug:'teak-furniture', name:'Teak furniture', group:'living', image:'interior', description:'Furniture with the warmth of natural timber. Tell us what you are creating, and we will discuss your teak requirements.', use:'Residential, workplace and hospitality furniture enquiries', ask:['Furniture type','Dimensions and quantity','Reference design','Preferred finish']},
  {slug:'interiors', name:'Interior applications', group:'living', image:'interior', description:'A material that connects a room. Explore teak for your interior project, from individual details to coordinated spaces.', use:'Home and commercial interior projects', ask:['Type of application','Project dimensions','Reference images or design description','Project location']},
  {slug:'finger-jointed-boards', name:'Finger-jointed boards', group:'processed', image:'craft', description:'Finger-jointed teak boards for further fabrication. Share the dimensions and intended application so we can discuss a suitable supply.', use:'Furniture making and interior fabrication', ask:['Board length, width and thickness','Required quantity','Intended application','Finishing requirements']},
  {slug:'kiln-dried-planks', name:'Kiln-dried planks', group:'processed', image:'craft', description:'Teak planks processed through kiln drying in India. Discuss the size, moisture requirement and quantity your work calls for.', use:'Joinery, furniture and interior production', ask:['Plank dimensions','Required moisture specification','Quantity','Intended use']},
  {slug:'round-logs', name:'Round logs', group:'timber', image:'timber', description:'Teak in its round log form, sourced directly from Africa. Enquire about the dimensions and quantities needed for your operation.', use:'Sawmills, timber merchants and bulk requirements', ask:['Preferred length and girth','Quantity or volume','Required grade or selection','Delivery city and PIN code']},
  {slug:'lumber-sizes', name:'Lumber & cut sizes', group:'timber', image:'timber', description:'Teak lumber and sizes for workshops, manufacturing and construction. Share your cutting list to begin an enquiry.', use:'Trade supply and project-specific timber requirements', ask:['Length, width and thickness','Quantity or cutting list','Seasoning requirements','Delivery location']},
  {slug:'rough-squares', name:'Rough squares', group:'timber', image:'timber', description:'Rough-squared teak for further processing. Discuss your required sections and volumes with Grandiz.', use:'Resawing, joinery and further processing', ask:['Required section sizes','Lengths','Volume or quantity','Delivery location']}
];

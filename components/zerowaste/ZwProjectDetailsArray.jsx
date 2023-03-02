export const ZwProjectDetailsArray = [
  {
    name: "Zero Waste",
    images: [
      "../../public/zwhero.png",
      "../../public/foodshareZW.png",
      "../../public/productdetailZW.png",
    ],
    description:
      "Zero Waste is a web app that aims to reduce food waste and build community! Check out my github if you&#39;re interested in collaborating!",
    collaborators: [
      {
        name: "Shauni Vanderhorst",
        link: "https://github.com/Shaunivdh",
        collabtext:
          "Shauni noticed that in order to contact the user you had tomanually copy or type the phone number. She added a featureextension to fix this issue. Now when you click the number it will automatically open in your phone.",
      },
    ],

    techstack: [
      {
        topic: "Next.Js",
        text: "I chose Next because of the improved development process, improved performance which leads to faster applications, and improved SEO.",
        images: [],
      },

      {
        topic: "Multer",
        text: "I used the middleware, Multer, to handle the image upload because Multer is designed to handle multipart/form-data in forms. I stored the image in a local folder then stored the image_path to the database in order to render uploaded images with the product uploaded.",
        images: [""],
      },

      {
        topic: "Express.Js",
        text: " I used Express as it is the most popular Node web framework. It also uses Javascript, is scalable, and has a great open-source community.",
        images: [""],
      },

      {
        topic: "MySQL",
        text: " MySQL: I chose MySQL for the database because of it&#39;s reliability and security as a database management system. However, I am considering refactoring and switching to MongoDB because of its geospatial query capabilities.",
        images: [""],
      },
    ],
    link: "Site Link",
    repo: "https://github.com/zero-waste",
  },
];

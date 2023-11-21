"use strict";

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      pictures: {
        populate: true,
      },
      pictures: {
        populate: {
          fields: ["picture"],
          picture: {
            populate: true,
          },
        },
      },
      buttons: {
        populate: true,
      },
      button: {
        populate: true,
      },
      contactElement: {
        populate: {
          fields: ["contactElement"],
        },
      },
      gridElement: {
        populate: {
          fields: ["gridElement"],
          button: {
            populate: true,
          },
        },
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription", "keywords"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};

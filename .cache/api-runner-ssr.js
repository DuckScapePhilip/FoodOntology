var plugins = [{
      plugin: require('C:/GitHub/FoodOntology/node_modules/gatsby-plugin-dark-mode/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/GitHub/FoodOntology/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/GitHub/FoodOntology/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/GitHub/FoodOntology/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/GitHub/FoodOntology/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"offsetY":64},
    },{
      plugin: require('C:/GitHub/FoodOntology/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-autolink-headers","options":{"offsetY":64}},{"resolve":"gatsby-remark-copy-linked-files","options":{"ignoreFileExtensions":[]}},{"resolve":"gatsby-remark-mermaid","options":{"mermaidOptions":{"themeCSS":"\n            .node rect,\n            .node circle {\n              stroke-width: 2px;\n              stroke: #3f20ba;\n              fill: #F4F6F8;\n            }\n            .node.secondary rect,\n            .node.secondary circle,\n            .node.tertiary rect,\n            .node.tertiary circle {\n              fill: white;\n            }\n            .node.secondary rect,\n            .node.secondary circle {\n              stroke: #f25cc1;\n            }\n            .node.tertiary rect,\n            .node.tertiary circle {\n              stroke: #41d9d3;\n            }\n          "}}},"gatsby-remark-prismjs-title",{"resolve":"gatsby-remark-prismjs","options":{"showLineNumbers":true}},"gatsby-remark-rewrite-relative-links",{"resolve":"gatsby-remark-check-links","options":{}}],"remarkPlugins":[[null,{"wrapperComponent":"MultiCodeBlock"}]]},
    },{
      plugin: require('C:/GitHub/FoodOntology/node_modules/gatsby-plugin-segment-js/gatsby-ssr'),
      options: {"plugins":[],"prodKey":"wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg","trackPage":true},
    },{
      plugin: require('C:/GitHub/FoodOntology/node_modules/gatsby-theme-apollo-docs/gatsby-ssr'),
      options: {"plugins":[],"siteName":"Food Ontology","subtitle":"Documentation","description":"A guide to GFTC's recommended standards and APIs","menuTitle":"FOOD ONTOLOGY ECOSYSTEM","segmentApiKey":"wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg","algoliaApiKey":"0215604f45f349255c6d5dda932005b6","algoliaIndexName":"traceability-dialogue_developer","baseUrl":"https://docs.foodontology.com/","contentDir":"/source/","twitterHandle":"IFT","spectrumHandle":"ift","spectrumPath":"/doc-gdst","youtubeUrl":"https://www.youtube.com/user/IFTlive","logoLink":"https://www.foodontology.com/","defaultVersion":"default","navConfig":{"IFTNext":{"url":"https://www.ift.org/iftnext","description":"IFTNEXT is a heightened, purpose-driven commitment to bringing provocative ideas and discoveries together to inspire thoughtful, important conversations that challenge conventional approaches with the goal of informing global issues related to the science of food."}},"footerNavConfig":{"News":{"href":"https://www.traceability-dialogue.org","target":"_blank","rel":"noopener noreferrer"}},"root":"C:\\GitHub\\FoodOntology","githubRepo":"duckscapephilip/foodontology","sidebarCategories":{"null":["index","intro/executive-summary","intro/feedback","intro/how-to-use-docs"],"Pretext":["pretext/why-epcis","pretext/why-extension","pretext/why-iuu"],"Certifications":["certification/msc-asc","certification/other-cert"],"Regulatory":["regulatory/gdpr","regulatory/simp-aquaculture","regulatory/simp-wild-harvest","regulatory/eu-catch-cert","regulatory/non-western-regulations"],"Aquaculture Events":["aquaculture-events/master-data","aquaculture-events/brood-stock","aquaculture-events/feeding","aquaculture-events/farm-harvest","aquaculture-events/wild-to-farmed","aquaculture-events/commodities","aquaculture-events/xml-mappings"],"Wild Events":["wild-events/master-data","wild-events/fishing-events","wild-events/on-vessel-processing","wild-events/transshipment","wild-events/landing","wild-events/gear-types","wild-events/mari-culture","wild-events/commodities","wild-events/xml-mappings"],"EPCIS Extensions":["extensions/business-steps","extensions/dispositions","extensions/certificates","extensions/catch-area","extensions/master-data","extensions/ilmd","extensions/object-event"],"Open API":["open-api/examples","open-api/swagger-api"],"Resources":["resources/featured-implementation","resources/index"],"Contributions":["contributions/how-to-work-on-doc","contributions/how-to-request-new-doc","contributions/how-to-submit-work-for-review","contributions/running-gatsby","contributions/authors","contributions/contacts"]}},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

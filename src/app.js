/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'casecodes',
  searchClient: algoliasearch('1FU4VRRXB6', '3a3c72dff081474d2d5e0f7fa519cce5'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
    templates: {
      resetLabel: 'Clear Filters',
    },
  }),
  instantsearch.widgets.refinementList({
    container: '#Specialty',
    attribute: 'Specialty',
  }),
  instantsearch.widgets.refinementList({
    container: '#Surgeon',
    attribute: 'Surgeon',
  }),
  instantsearch.widgets.refinementList({
    container: '#Location',
    attribute: 'Location',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
           <div class="case">
             {{#helpers.highlight}}{ "attribute": "Case " }{{/helpers.highlight}}
          </div>
          <div class="code"><b>Surgeon:</b>
            {{#helpers.highlight}}{ "attribute": "Surgeon" }{{/helpers.highlight}}
         </div>
          <div class="code"><b>Speciality:</b>
            {{#helpers.highlight}}{ "attribute": "Specialty" }{{/helpers.highlight}}
          </div>
          <div class="code"><b>Anesthesia Type:</b>
            {{#helpers.highlight}}{ "attribute": "Anesthesia Type" }{{/helpers.highlight}}
          </div>
          <div class="code"><b>Case Notes:</b>
            {{#helpers.highlight}}{ "attribute": "Case Notes" }{{/helpers.highlight}}
          </div>
          <div class="code"><b>Anesthesia Code:</b>
            {{#helpers.highlight}}{ "attribute": "Anesthesia Code" }{{/helpers.highlight}}
          </div>
          <div class="code"><b>Billing Units:</b>
            {{#helpers.highlight}}{ "attribute": "Billing Units" }{{/helpers.highlight}}
          </div>
          <div class="code"><b>Billing Notes:</b>
            {{#helpers.highlight}}{ "attribute": "Billing Notes" }{{/helpers.highlight}}
          </div>
          <div class="code"><b>Surgical Code:</b>
            {{#helpers.highlight}}{ "attribute": "Surgical Code" }{{/helpers.highlight}}
          </div>
          <div class="code"><b>Surgical Code Notes:</b>
            {{#helpers.highlight}}{ "attribute": "Surgical Code Notes" }{{/helpers.highlight}}
          </div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();

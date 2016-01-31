Ext.data.JsonP.data_filters({"guide":"<h1>Walkthrough: Mobile Services \"data\" - Filter example</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/data_filters-section-1'>Adding Filters</a></li>\n<li><a href='#!/guide/data_filters-section-2'>app/store/TodoItems.js</a></li>\n<li><a href='#!/guide/data_filters-section-3'>app/controller/Main.js</a></li>\n<li><a href='#!/guide/data_filters-section-4'>Custom Theme</a></li>\n</ol>\n</div>\n\n<p>The <a href=\"#!/example/Filters\">Filters</a> sample application is an example building on the simpler <a href=\"#!/example/Basic\">Basic</a> demo.\nYou can view the full source code in the download package by opening the /examples/data/Filters folder.</p>\n\n<p>Be sure you have read and fully understand the <a href=\"#!/guide/data_basic\">Basic walkthrough</a> before continuing with this guide.</p>\n\n<h2 id='data_filters-section-1'>Adding Filters</h2>\n\n<p>Because the Filters example simply builds on the functionality of the Basic sample app, we'll dive directly into how we apply filters to our READ requests.</p>\n\n<h2 id='data_filters-section-2'>app/store/TodoItems.js</h2>\n\n<p>First, we need to configure our store with remote sorting and remote filtering:</p>\n\n<pre><code>Ext.define('Filters.store.TodoItems', {\n    extend : 'Ext.data.Store',\n\n    requires : [\n        'Filters.model.TodoItem'\n    ],\n\n    config : {\n        model        : 'Filters.model.TodoItem',\n        pageSize     : 8,\n        remoteSort   : true,\n        remoteFilter : true,\n        autoSync     : true\n    }\n});\n</code></pre>\n\n<h2 id='data_filters-section-3'>app/controller/Main.js</h2>\n\n<h3>Sorting</h3>\n\n<p>The Filters example contains two additional buttons on the bottom toolbar - for sorting the list in ASC/DESC order.\nOur controller handles the logic:</p>\n\n<pre><code>sortDesc : function (btn) {\n    var store = Ext.getStore('TodoItems');\n    btn.up().getPressedButtons().length === 0 ? store.sort([]) : store.sort('text', 'DESC');\n    store.loadPage(1);\n},\n\nsortAsc : function (btn) {\n    var store = Ext.getStore('TodoItems');\n    btn.up().getPressedButtons().length === 0 ? store.sort([]) : store.sort('text', 'ASC');\n    store.loadPage(1);\n},\n</code></pre>\n\n<p>Because our data store was configured with <em>remoteSort</em>, the proxy automatically handles the request for us.</p>\n\n<h3>Filtering</h3>\n\n<p>The same concept happens with filtering. In the top toolbar, there's a new button for \"filter completed\".\nWhen pushed, our controller handles the logic:</p>\n\n<pre><code>onFilter : function (btn) {\n    var store = Ext.getStore('TodoItems');\n\n    if (!btn._filtered) {\n        btn.element.down('.icon-circle-check').dom.style.backgroundColor = '#008D00';\n\n        store.filter([\n            Ext.create('<a href=\"#!/api/Ext.azure.Filter\" rel=\"Ext.azure.Filter\" class=\"docClass\">Ext.azure.Filter</a>', {\n                property : \"complete\",\n                value    : \"false\"\n            })\n        ]);\n    }\n    else {\n        btn.element.down('.icon-circle-check').dom.style.backgroundColor = '';\n        store.clearFilter();\n    }\n\n    if (btn._filtered === undefined) {\n        btn._filtered = true;\n    }\n    else {\n        btn._filtered = !btn._filtered;\n    }\n\n    store.loadPage(1);\n},\n</code></pre>\n\n<p>Here you can see how we build a series of filters using <a href=\"#!/api/Ext.azure.Filter\" rel=\"Ext.azure.Filter\" class=\"docClass\">Ext.azure.Filter</a>.</p>\n\n<p>Again, because our Store is setup with <em>remoteFilter</em> the request is handled automatically!</p>\n\n<h2 id='data_filters-section-4'>Custom Theme</h2>\n\n<p>We have also added a custom theme to our application. First, you should familiarize yourself with the\n<a href=\"http://docs.sencha.com/touch/2.3.1/#!/guide/theming\">Sencha Touch Theming Guide</a> so you understand\nthe basic concepts of our theming package.</p>\n\n<p>Next, you can take a look at our SASS files:</p>\n\n<pre><code>~/resources/sass/app.scss\n</code></pre>\n\n<p>We include a few modifications to the \"default\" Sencha Touch and some extra classes/icons. By running\n<em>sencha ant sass</em> in Sencha Cmd, we can manually rebuild the theme CSS.</p>\n","title":"Mobile Services: Data API with Filters"});
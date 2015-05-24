---
layout: docs
title: Elasticsearch Indexer Docs
---

## Installing Elasticsearch

Follow the instructions on [Elasticsearch Docs](http://www.elastic.co/guide/en/elasticsearch/reference/1.5/_installation.html)

Make sure that Elasticsearch is installed and running on your server by running  
`curl -XGET -i 'http://127.0.0.1:9200'` in the command line

## Installing Elasticsearch Indexer

Download and install [the plugin](https://wordpress.org/plugins/elasticsearch-indexer/) like you normally would install a plugin

After you have activated the plugin, you will have to reindex the posts from the admin panel.
As long as the plugin is active, the index will sync automatically to changes.

Once you have indexed, Elasticsearch Indexer will automatically integrate WP_Query with Elasticsearch.

Reindex whenever you update the plugin.

## Troubleshooting

> I get `IllegalArgumentException[Document contains at least one immense term in...` when indexing

Probably one of the values for a meta data is too large. [Try this](http://answers.splunk.com/answers/136664/changing-max-length-of-field.html)


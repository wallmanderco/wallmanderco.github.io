---
layout: docs
title: Querybuilder | Elasticsearch Indexer Docs
---

## Usage

Elasticsearch Indexer will automatically integrate WP_Query with Elasticsearch.
However, you can use the query builder to build your own queries.

```php
$posts = ES_Query()
    ->where('post_type', 'post')
    ->where('post_status', ['publish', 'private'])
    ->addSort('post_date', 'desc')
    ->setFrom(0)
    ->setSize(10)
    ->getPosts();
```

Or you can use a WP_Query object and continue from there.

```php
$posts = ES_Query(new WP_Query([]))
    ->where('post_meta.foo.raw', 'bar')
    ->getPosts();
```

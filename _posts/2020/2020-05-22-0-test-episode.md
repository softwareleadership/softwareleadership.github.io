---
episode: 0
title: Test Episode
file: https://ia600303.us.archive.org/22/items/sight/sight_64kb.mp3
embed: https://archive.org/embed/sight
duration: "01:13" # mm:ss
length: 73 # in seconds
image: /assets/images/og_image.png # fallback to site image if none specified here
keywords: "keyword tags" # 100 characters total
tags: "keyword tags"
summary: >-
    This will contain a brief summary of the episode. It should fit within a tweet length.
description: >-
    Longer information about the episode. Much longer, as in show notes.
explicit: no
block: # yes|no
---

## {{ page.date | date: "%B %d, %Y" }}

{{ page.summary }}

![]({{page.image}})

{% include google-ads-main.html %}

## Show Notes

{{ page.description }}

{% include google-ads-main.html %}

## Episode Keywords

```
{{page.keywords}}
```

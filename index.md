---
title: The podcast that helps make good software professionals great!
call_to_action:
    text: Shape the Future!
    url: '#shape-the-future-of-software-leadership'
form:
    action: https://docs.google.com/forms/d/e/1FAIpQLSdesJehmvKqjXZmy-ChQVYLl9ULr4XAOz8Uc85DkiIiQj8qLg/formResponse
    questions:
        - 
            label: Email Address
            required: true
            type: email
            placeholder: you@example.com
            name: emailAddress
        - 
            label: First Name
            required: true
            type: text
            placeholder: First Name
            name: entry.1309531841
        - 
            label: Last Name
            required: true
            type: text
            placeholder: Last Name
            name: entry.470926779
        - 
            label: What length of podcast episode do you typically prefer to listen to?
            required: true
            type: radio
            include_other: true
            name: entry.1916619316
            options:
                -
                    text: 15-25 minute
                    value: 15-25 minute
                -
                    text: 25-45 minute
                    value: 25-45 minute
                -
                    text: "> 45 minutes"
                    value: "> 45 minutes"
        - 
            label: What sources do you typically use for discovering new podcasts?
            required: true
            type: checkbox
            include_other: true
            name: entry.1594495330
            options:
                -
                    text: Apple Podcasts / iTunes
                    value: Apple Podcasts / iTunes
                -
                    text: Google Podcasts
                    value: Google Podcasts
                -
                    text: Spotify
                    value: Spotify
                -
                    text: Stitcher
                    value: Stitcher
                -
                    text: TuneIn
                    value: TuneIn
                -
                    text: Don't Know
                    value: Don't Know
        - 
            label: Guest Suggestions
            required: false
            type: longtext
            placeholder: What guests would you want to hear offering their perspectives on software leadership?
            name: entry.364333037
        - 
            label: Software Leadership
            required: false
            type: longtext
            placeholder: How do you define software leadership?
            name: entry.786049213
        - 
            label: Topics
            required: false
            type: longtext
            placeholder: What topics would you like for the show to address?
            name: entry.1361725287
        - 
            label: COVID-19
            required: false
            type: longtext
            placeholder: How has the COVID-19 situation affected your regular podcast listening routine?
            name: entry.668304513
        - 
            label: Where are you located?
            required: false
            type: longtext
            placeholder: Just a general idea like city and country.
            name: entry.726936474
        - 
            label: Anything else?
            required: false
            type: longtext
            placeholder: Anything else you'd like to share?
            name: entry.1435205606
---

## Welcome!

[The Software Leadership Podcast](/) features a broad range of software and technology leaders representing a diversity of cultures, backgrounds, perspectives, industries and platforms. Expect to be challenged, educated and empowered. Bring an open mind. You never know what you might learn when you listen well, even to positions that don't naturally align with your current conceptions.

## Recent Episodes

{% assign latestEpisodes = site.posts | where_exp: "item", "item.episode != null" | limit:5 %}
{% for episode in latestEpisodes %}
{% include episode_summary.html episode=episode %}
{% endfor %}
<hr />

## Latest Posts

{% assign latestPosts = site.posts | where_exp: "item", "item.blog" | limit:5 %}
{% for post in latestPosts %}
{{post.date | date: '%B %d, %Y'}} - [{{post.title}}]({{post.id}})

{% endfor %}
<hr />

## Your Host

{% include host.html %}

## About the Show

I first took the plunge into the realm of podcasting in 2019 when I joined the 
team at [Software Engineering Radio (se-radio.net)](https://www.se-radio.net/team/jeff-doolittle/). It has been an amazing experience so far, but being just 
one out of about 10 hosts means I can only release so much content. I want to produce and 
publish more content more often. I also want to  explore topics of interest to software 
professionals of all kinds rather than focusing on  software engineers in particular. To 
accomplish these goals, I've sensed that it's time to 
start something new.

<!-- {% include google-ads-main.html %} -->

## Shape the Future of Software Leadership!

This is where you come in. I'm still in the exploratory phase and that means 
**you have an opportunity to shape the format, focus and future of  <a href="/" target="_self">{{ site.title }}</a>**.

I really want to hear from you! Fill out the form below and join the conversation.

[Privacy Policy](/privacy)

{% include google-form.html form=page.form %}

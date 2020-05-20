---
call_to_action:
    text: Shape the Future!
    url: 
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
            placeholder: What guests would do you want to hear offering their perspectives on software leadership?
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

## Your Host

{% include host.html %}

<hr />

## About the Show

This is where you come in. I'm still in the exploratory phase and that means 
**you have an opportunity to shape the format, focus and future of the podcast**.

I really want to hear from you! Fill out the form below and join the conversation.

<hr />

## Shape the Future of Software Leadership!

[Privacy Policy](/privacy)

{% include google-form.html form=page.form %}

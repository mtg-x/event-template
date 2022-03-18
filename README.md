# Event Template
Welcome to the site template for the MTGs ! This template allows you to quickly create websites for your events and conferences. Feel free to contribute :)

## Quick start

1. Clone this repository : `git clone https://github.com/mtg-x/event-template.git`
2. Install dependencies : `bundle install`
3. Launch the site locally : `jekyll serve` (when editing the config.yml, restart the server)
4. Your site should be accessible at `localhost:4000`.

## Installation (for local development)
1. For first time user, you have to install Ruby and NodeJS. You may follow the installation guide in the [Jekyll tutorial](http://melvinchng.github.io/jekyll/installation.html#ruby-and-nodejs-installation) or [Ruby on Rails Tutorial](http://melvinchng.github.io/jekyll/RubyOnRailsInstallation.html) for Windows, Linux, and MacOS (installation videos are included).
2. Install Jekyll by using the command `gem install jekyll`.
3. Then, install Jekyll Sitemap and Jekyll SEO gems by using the command `gem install jekyll-sitemap` and `gem install jekyll-seo-tag`.
4. Start your localhost server by using the command `jekyll serve`. Make sure that you are at the root directory of your folder before using this command.
5. Your site should be accessible at `localhost:4000`.
6. For additional information about Jekyll, refer to the [official website](http://jekyllrb.com/). 

_Note: If you forked it and edited `_config.yml` via the online editor on Github, the Github pages may not work. In that case, you will make any changes (add a new line, etc) and push the changes from your local machine via CLI or GUI git._
## Features

### Accueil (Event details)
This page is the main page of the site. Use it to promote your event through a description of your event, few stats and throwback pictures from previous events for example.

- Configure the event title, index pages, date and icon in the `_config.yml` file.
- You can edit the introduction of your website in the `_includes/markdown/intro.md` file.
- You can edit the stats in the `_data/statistics.yml` file.
- You can edit/add/remove sections in the `index.html` file.

### Agenda
- Put your agenda in the `_data/agenda.yml` file.
- For each session, create a new file in the `_sessions` folder.
- Link the session `uid` key with the time slot in the `_data/agenda.yml` file.

### Speakers
- Edit your speaker's info in the `_data/speakers.yml` file.
- Store their pictures in the `_images/speakers` folder.
### Participants (Team's Profile Page)
This page can be used to promote your team.
-  Put the team informations in the `_data/team.yml` file.
-  Put the team profile pictures in the `_images/team` folder.

### FAQ
- Edit your FAQ in the `_data/faq.yml` file.

### Code of Conduct
- Edit your code of Conduct in the `pages/coc.html` file	

### Sponsors
- Edit your sponsors on the `_data/sponsors.yml` file.
- Store their logos in the `_images/sponsors` folder.


## Enjoy!

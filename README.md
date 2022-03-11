# Event Template
Welcome to the site template for the MTGs ! This template allows you to quickly create websites for your events and conferences. Feel free to contribute :)

## Quick start
Once you have cloned this repo, run the following command to install the dependencies:
```
bundle install
```

To launch the site on your local machine, run:
```
jekyll serve
```
## Features
### Index Page
- Event's title, location, and date
- Team page 
- Schedule
- Code of Conduct

### Event details
- Configure the event title, date and icon in the `config.yml` file
### Team's Profile Page
Two different design:
-  Put the team profile pictures in the `images/team` folder
-  Put the team informations in the `_data/team.yml` file
### Agenda
- Put your agenda in the `_data/agenda.yml` file
### FAQ
- You can edit your Questions & Answers in the `_data/faq.yml` file	
# Intro
You can edit the introduction of your website in the `_includes/markdown/intro.md` file.
### Code of Conduct
You can edit your code of Conduct in the `_pages/coc/_/coc.html` file	

## Installation (for local development)
1. For first time user, you have to install Ruby and NodeJS. You may follow the installation guide in the [Jekyll tutorial](http://melvinchng.github.io/jekyll/installation.html#ruby-and-nodejs-installation) or [Ruby on Rails Tutorial](http://melvinchng.github.io/jekyll/RubyOnRailsInstallation.html) for Windows, Linux, and MacOS (installation videos are included).
2. Install Jekyll by using the command `gem install jekyll`.
3. Then, install Jekyll Sitemap and Jekyll SEO gems by using the command `gem install jekyll-sitemap` and `gem install jekyll-seo-tag`.
4. Start your localhost server by using the command `jekyll serve`. Make sure that you are at the root directory of your folder before using this command.
5. Your site should be accessible at `localhost:4000`.
6. For additional information about Jekyll, refer to the [official website](http://jekyllrb.com/). 

_Note: If you forked it and edited `_config.yml` via the online editor on Github, the Github pages may not work. In that case, you will make any changes (add a new line, etc) and push the changes from your local machine via CLI or GUI git._

## Enjoy!

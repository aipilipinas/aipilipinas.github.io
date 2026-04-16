# AI Pilipinas Website

Official website for [AI Pilipinas](https://aipilipinas.github.io) — built with [Jekyll](https://jekyllrb.com) and the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme.

## Structure

```
ai-pilipinas/
├── _config.yml          # Main site configuration
├── _data/
│   └── navigation.yml   # Top navigation links
├── _pages/              # Static pages (About, Programs, Events, etc.)
├── _posts/              # Blog / news posts
├── assets/
│   ├── css/
│   │   └── main.scss    # Custom red & cream theme overrides
│   └── images/          # Site images (add your own here)
├── index.html           # Homepage (splash layout)
├── Gemfile              # Ruby gem dependencies
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions auto-deploy
```

## Local Development

### Prerequisites
- Ruby 3.x
- Bundler (`gem install bundler`)

### Setup

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).

## Deployment (GitHub Pages)

1. Create a repo named `aipilipinas.github.io` (or your org's equivalent)
2. Push this code to the `main` branch
3. In repo Settings → Pages → Source: select **GitHub Actions**
4. The site auto-deploys on every push to `main`

## Customization

### Update site details
Edit `_config.yml`:
- Change `url` to your GitHub Pages URL
- Update `repository`
- Update social media links under `author.links`

### Add images
Place images in `assets/images/`. Referenced images in `_config.yml` and pages:
- `/assets/images/ai-pilipinas-logo.png` — author/sidebar logo
- `/assets/images/hero-bg.jpg` — homepage hero background
- `/assets/images/feature-community.jpg` — homepage feature row
- `/assets/images/feature-programs.jpg` — homepage feature row
- `/assets/images/feature-events.jpg` — homepage feature row
- `/assets/images/about-bg.jpg` — about section image

### Add a new page
Create a `.md` file in `_pages/` with this front matter:
```yaml
---
title: "Page Title"
layout: single
permalink: /your-page/
---
```

### Add a news post
Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`:
```yaml
---
title: "Post Title"
date: 2025-06-01
categories:
  - Announcements
tags:
  - tag1
excerpt: "Short description shown in listing."
---

Your content here...
```

## License

Content © AI Pilipinas. Theme: [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) (MIT License).

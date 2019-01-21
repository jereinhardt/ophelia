# Ophelia

Ophelia is a Jekyll theme for creating professional-looking portfolio sites.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "ophelia"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: ophelia
```

### Showcasing your Work

In order to create a section that showcases your body of work, you must create an additional taxonomy called `projects`.  Be sure to create a directory in your site called `_projects` and add the following to your configuration file:

```yaml
collections:
  projects:
    output: true
    permalink: /projects/:name
```
Each project should be a markdown file.  You are able to include the following frontmatter in each project file:

- `title` - the name of the project
- `description` - a short description of the project
- `project_link` - an external link to the project
- `image` - the path the the project's main image
- `background (optional)` - the background that should be used for the project page's header
- `showcase_background (optional)` - the background that should be used for the showcase section
- `showcase_link_path (optional)` - an external link for the showcase section's CTA
- `showcase_text (optional)` - text for the showcase section's CTA


## Usage

### Importing Styles

Ophelia allows you to configure styles by overriding Sass variables.  To do this, you will need to make a file in your site at `/assets/css/styles.scss` which should look like:

```sass
---
---

$primary-color: blue;
$secondary-color: red;

@import "ophelia";
```

Even if you don't want to customize your styles, you MUST use `@import "ophelia"` in order to use the theme's default styles.

The Sass variables you can override are:

- `$primary-color` - the primary color of your site's color scheme.
- `$secondary-color` - the secondary color of your site's color scheme.  This should be a color that compliments the primay color.
- `$success-color` - the color that marks a positive event or action.
- `$warning-color` - A contrasting color in your site's color scheme that is used to highlight errors or make elements stand out as important.
- `$background-color` - The color that will be used as the primary background of your site.  It is recommened that this color be a white or a light shade of gray, or (if you prefer 'dark' themes) black or a very dark shade of grey.

### Configuration

The following are the configurable options you can include in your `_config.yaml` file.

```yaml
main_navigation:
  cta_path: link for the main CTA in the navigation bar.  It is recommended to set this to link to the contact form with `#contact`.
  cta_text: the text for the main CTA in the navigation bar.
  items: a map of navigatable items in the navigation bar.
    text: the item's text.
    path: the anchor tag's linked path.
  logo: path to the logo image to be used in the navigation bar.  If you don't have a logo, you can also use `site_name`.
  site_name: the name of your site, which will appear as an anchor tag to your site's homepage in the navigation bar.

hero:
  background: the background of the main hero section.
  cta_path: the link path of the hero's main CTA.
  cta_text: the text of the hero's main CTA.
  description: A short description of the site for the hero section
  subtitle: The subtitle of the hero section
  title: the title of the hero section

portfolio:
  title: The title of the portfolio section.

about:
  image: The main image of the about section.  Can be an image of you or something related to your work.
  title: the title of the about section
  description: A description of yourself and/or your work for the about section
  skills (optional): a list of skills

contact:
  title: the title of the contact section
  form:
    action: The action where you want your form to submit.  It is recommended you use formspree to handle form submissions, making the action something like `https://formspree.io/your@email.com`
    email:
      label: The label of the email input
      name: the `name` attribute of the email input.  If using formspree, it is recommeded this be `_replyto`
      error: the error message that appears if the email is missing or invalid
    message:
      label:  the label of the message input
      name: he `name` attribute of the email input.
      error:  the error message that appears if the message is missing
    name:
     label:  the label of the name input
      name:  the `name` attribute of the name input
      error:  the error message that appears if the name is missing
    phone:
     label:  the label of the phone number input
      name:  the `name` attribute of the phone number input
    submit:  the text of the submit button
    thank_you_redirect:  the redirect path for successful form submissions

footer:
  owner: The name of the person or company that owns the site

social: a list of maps that contain social media information
  name: The name of the social media site
  link: the link to the social media profile
```

Adding social profiles will create social media icons that link to your profiles.  Currently, Ophelia provides social media icons for
- Email
- GooglePlus
- Instagram
- Linked
- Pinterest
- Twitter
- Youtube

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jereinhardt/ophelia. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install` and `npm install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


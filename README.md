# ophelia

Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes` and your sass in `_sass`. To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

TODO: Delete this and the text above, and describe your gem

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "ophelia"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: ophelia
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install ophelia

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
- `$warning-color` - A contrasting color in your site's color scheme that is used to highlight errors or make elements stand out as important.
- `$background-color` - The color that will be used as the primary background of your site.  It is recommened that this color be a white or a light shade of gray, or (if you prefer 'dark' themes) black or a very dark shade of grey.

### Configuration

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


# BAMP Website

A conversion of the website built for BAMP by Mission Bit and located [here](https://github.com/MissionBit/BAMPWebsite).

Converted by for use with Netlify CMS using Netlify's Hugo template.

## Getting started

Deploy this repository to Netlify.

Once the initial build finishes, you can invite yourself as a user. Go to the Identity tab in your new site, click "Invite" and send yourself an invite.

Now you're all set, and you can start editing content!

## Local Development

Clone this repository, and run `yarn` or `npm install` from the new folder to install all required dependencies.

Then start the development server with `yarn start` or `npm start`.

Log in to the admin area using the Netlify identity widget.

- **note: give the site a couple seconds to load, or the widget will close on you.**
- **note: third-party sign-on (e.g. github) will not work on localhost. Use email/password.**

----

## Hugo + Netlify CMS crash course

### Adding Data:
	- add field (YAML syntax) to site/content/desserts/_index.md
		- e.g.
			`pie: apple`

### Updating HTML Templates
	- edit or create partial html file (if necessary)
		- e.g.
			- `site/layouts/partials/pie.html`
		- insert variables as necessary: `<li>Pie: {{.pieType}}</li>`
		- (if inside of an HTML attribute, include the quotation marks)
	- edit page that should contain the component
		- e.g.
			- `site/layouts/section/dessert.html`
	- include component
		- e.g.
			- `{{ partial "pie" . }}`
		- (the dot says to include all the data in the current context)

### Updating CMS preview:
	- edit or create react JS file for individual component (if necessary)
		-	e.g.
			- `src/js/cms-preview-templates/components/pie.js`
		- add props as needed to contain data
	- add `<Pie>` component to whatever page it should be on
		- e.g.
			- `src/js/cms-preview-templates/dessert.js`
	- supply data to component
		- e.g.
			- `const pie = entry.getIn(["data", "pie"])`
			- `<Pie type={pie}/>`

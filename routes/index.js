/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

const keystone = require('keystone');

exports = module.exports = nextApp => keystoneApp => {
	// Next request handler
	const handle = nextApp.getRequestHandler();
	keystoneApp.get('/api/tenants', (req, res, next) => {
		const Tenant = keystone.list('Tenant');
		Tenant.model.find({});
	});

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};
// var importRoutes = keystone.importer(__dirname);

// // Common Middleware
// keystone.pre('routes', middleware.initLocals);
// keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
// var routes = {
// 	views: importRoutes('./views'),
// 	login: importRoutes('./login')
// };

// // Setup Route Bindings
// exports = module.exports = function (app) {
// 	// Views
// 	app.get('/', routes.views.index);
// app.all('/login', routes.views.login);

// 	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
// 	// app.get('/protected', middleware.requireUser, routes.views.protected);

// };

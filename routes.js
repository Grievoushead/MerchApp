var views = require('./app/controllers/views'),
    categories = require('./app/controllers/api/categories'),
    auth = require('./app/controllers/api/auth');

module.exports = function (app) {
  // FrontEnd
  app.get('/', views.index);
  app.get('/api/categories', categories.getAll);
  app.get('/api/categories/:id', categories.getById);
  app.get('/:folder/:view', views.partial);

  // BackEnd
  app.get('/admin', views.admin);
  app.post('/api/backend/login', auth.login);
  app.get('/api/backend/logout', auth.logout);
  app.get('/api/backend/IsUserLoggedIn', auth.isUserLoggedIn);
//  app.get('/posts/', posts.list);
//  app.get('/posts/create/', posts.create_form);
//  app.post('/posts/create/', posts.create);
//  app.get('/posts/:id/', posts.one);
//  app.get('/posts/:id/remove/', posts.remove);
//  app.get('/posts/:id/update/', posts.update_form);
//  app.post('/posts/:id/update/', posts.update);
};

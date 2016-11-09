'use strict';

class LoginController {

  * create(request, response) {
    yield response.sendView('login.create');
  }

  * store(request, response) {
    const { email, password } = request.all();

    try {
      const validLogin = yield request.auth.attempt(email, password);

      yield request.with({ sucess: 'You have logged in!' }).flash();

      response.redirect('/users');
    } catch (e) {
      yield request.withOut('password')
      .andWith({ error: 'Credentials do not match.' })
      .flash();

      response.redirect('back');
    }
  }

  * destroy(request, response) {
    //
  }

}

module.exports = LoginController;
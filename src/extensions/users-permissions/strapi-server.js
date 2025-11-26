// src/extensions/users-permissions/strapi-server.js
module.exports = (plugin) => {
  // replace the 'me' controller
  plugin.controllers.user.me = async (ctx) => {
    const userId = ctx.state?.user?.id;
    if (!userId) return ctx.unauthorized();

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      userId,
      { populate: '*' } // populate everything
    );

    // Use ctx.send to keep response shape similar to plugin
    return ctx.send(user);
  };

  return plugin;
};

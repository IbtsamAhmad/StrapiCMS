module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fda4a98f0d43061dfcf1818884014a53'),
  },
});

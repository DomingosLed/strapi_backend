'use strict';

/**
 * op-system router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::op-system.op-system');

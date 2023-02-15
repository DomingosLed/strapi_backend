'use strict';

/**
 * op-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::op-system.op-system');
